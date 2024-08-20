### เมนูต่างๆ
* [ 📰 Documentation Java Script](https://learn.microsoft.com/en-us/minecraft/creator/?view=minecraft-bedrock-stable)
* [ 📁 Uuid generator ](https://www.uuidgenerator.net/)
* [ 🛒 Crafting & Name ](https://crafting.thedestruc7i0n.ca/)
* 
* [ Home & back ](https://github.com/SolightzZ/Minecraft-Bedrock)
* [ Menu Server ](https://github.com/SolightzZ/Minecraft-Bedrock/tree/main/Menu%20Server)

## Menu Server 
- Minecraft v 1.21.20+

### วิธีการทำ
- 📂 New folder
    * 📄 `manifest.json`
        * 📂 scripts
            * 📄 `main.js`


## Behavior Packs
* 📄 `manifest.json`
```
  {
    "format_version": 2,
    "header": {
        "name": "TEST 1",
        "description": "TEST 2",
        "uuid": "b6a44d59-e91c-4706-bd26-3cb5f083da9a",
        "version": [1, 0, 1],
        "min_engine_version": [ 1, 21, 20]
    },
	"modules": [
        {
            "description": "TEST 3",
            "type": "script",
            "language": "javascript",
            "uuid": "a42464e8-665b-4229-8366-539c92d4f7f4",
            "version": [1, 0, 1],
            "entry": "scripts/main.js"
        }
    ],
	"dependencies": [
		{
			"module_name": "@minecraft/server",
			"version": "1.14.0-beta"
		},
		{
			"module_name": "@minecraft/server-ui",
			"version": "1.3.0-beta"
		},
        {
			"uuid": "1836d738-069c-48cd-9421-2240bcf3dd4b",
			"version": [1, 0, 0]
		}
    ]
}
```

* 📄 `main.js`

```

import * as mc from '@minecraft/server';
import * as ui from '@minecraft/server-ui';

// คอมเม้น: การสร้าง Main และ การประกาศตัวแปร
mc.world.afterEvents.itemUse.subscribe(data => {
        const player = data.source;
        const item = data.itemStack;
        if (item.typeId === 'ใส่ชื่อ Item') {
            showMenu(player);
        }
})

//  คอมเม้น: การใช้ Function เพื่อสร้างเมนู 
// ตั้งชื่อว่า function showMenu
const a = "อธิบายเมนู ใส่ ไม่ใส่ก็ได้"
function showMenu(player) {
    const form = new ui.ActionFormData();
        title('ชื่อเมนู')
        button('ตั้งชื่อ ปุ่ม', 'ใส่ icon')

//  คอมเม้น: ตั้งปุ่มให้ทำงานอย่างไร
// function showMenu ให้ตรงกับ case 0: showEmotes(player); break;
    form.show(player).then(response => {
        switch (response.selection) {
            case 0: showEmotes(player); break;
        }
    })
}


```
