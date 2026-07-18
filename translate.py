import json
import asyncio
from googletrans import Translator

# googletrans==4.0.0-rc1 requires asyncio for some setups, but its sync API usually works fine
# We'll use the Translator object properly

async def main():
    translator = Translator()
    
    with open('src/i18n/locales/fr.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    langs = {
        'en': 'en',
        'mg': 'mg',
        'de': 'de',
        'es': 'es',
        'ja': 'ja',
        'zh': 'zh-cn',
        'ar': 'ar'
    }
    
    async def translate_dict(obj, dest_lang):
        if isinstance(obj, dict):
            new_obj = {}
            for k, v in obj.items():
                new_obj[k] = await translate_dict(v, dest_lang)
            return new_obj
        elif isinstance(obj, list):
            new_list = []
            for item in obj:
                new_list.append(await translate_dict(item, dest_lang))
            return new_list
        elif isinstance(obj, str):
            # Do not translate placeholders or code-like keys, but here all strings are text
            # Skip empty strings
            if not obj.strip():
                return obj
            try:
                # translator.translate can sometimes fail, add retry logic
                res = await translator.translate(obj, src='fr', dest=dest_lang)
                return res.text
            except Exception as e:
                print(f"Error translating '{obj}' to {dest_lang}: {e}")
                return obj
        else:
            return obj

    for lang_code, google_code in langs.items():
        print(f"Translating to {lang_code}...")
        translated_data = await translate_dict(data, google_code)
        
        with open(f'src/i18n/locales/{lang_code}.json', 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print(f"[{lang_code}] done")

if __name__ == "__main__":
    asyncio.run(main())
