# Minecraft-Bedrock

## Resource Packs
* manifest.json 

```
{
	"format_version": 2,
	"header": {
		"name": " ตั้วชื่อแพ็ค ",
		"description": " คำอธิบาย ",
		"uuid": " ใส่  UUID",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"description": "คำอธิบาย",
			"type": "resources",
			"uuid": " ใส่ UUID ",
			"version": [1, 0, 0]
		}
	]
}
```

## Behavior Packs
* manifest.json 

```
{
	"format_version": 2,
	"header": {
		"name": " ตั้วชื่อแพ็ค ",
		"description": " คำอธิบาย ",
		"uuid": "ใส่UUID",
		"version": [1, 0, 0],
		"min_engine_version": [1, 16, 0]
	},
	"modules": [
		{
			"description": "Behavior",
			"version": [1, 0, 0],
			"uuid": "ใส่UUID",
			"type": "data"
		}
	],
	"dependencies": [
		{
			"uuid": "ใส่UUID",
			"version": [1, 0, 0]
		}
	]
}
```

## สำหรับการเขียน Behavior Packs Java Script API
* manifest.json


```
{
    "format_version": 2,
    "header": {
        "name": "ตั้งชื่อแพ็ค",
        "description": "คำอธิบาย",
        "uuid": "ใส่UUID",
        "version": [1, 0, 1],
        "min_engine_version": [1, 21, 20]
    },
    "modules": [
        {
            "description": "ตั้งชื่อแพ็ค",
            "type": "script",
            "language": "javascript",
            "uuid": "ใส่UUID",
            "version": [1, 0, 1],
            "entry": "scripts/main.js"
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server",
            "version": "1.5.0-beta"
        },
        {
            "module_name": "@minecraft/server-ui",
            "version": "1.3.0-beta"
        },
        {
            "module_name": "@minecraft/server-net",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/server-gametest",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/server-admin",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/common",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/common-ui",
            "version": "1.0.0-beta"
        },
        {
            "module_name": "@minecraft/common-net",
            "version": "1.0.0-beta"
        },
        {
            "uuid": "d6b0cb47-f8e8-4204-95e8-849879b4abd8",
            "version": [1, 0, 0]
        }
    ]
}

```
- dependencies
	* @minecraft/server: โมดูลหลักสำหรับการใช้งานคำสั่งและฟังก์ชันพื้นฐานของเซิร์ฟเวอร์
	* @minecraft/server-ui: โมดูลสำหรับการสร้างและจัดการ UI
	* @minecraft/server-net: โมดูลสำหรับการจัดการเครือข่าย
	* @minecraft/server-gametest: โมดูลสำหรับการทดสอบเกม
	* @minecraft/server-admin: โมดูลสำหรับการจัดการและควบคุมแอดมิน
	* @minecraft/common: โมดูลพื้นฐานที่ใช้ร่วมกับฟังก์ชันอื่นๆ
	* @minecraft/common-ui: โมดูล UI ที่ใช้ร่วมกับฟังก์ชันอื่นๆ
	* @minecraft/common-net: โมดูลเครือข่ายที่ใช้ร่วมกับฟังก์ชันอื่นๆ
