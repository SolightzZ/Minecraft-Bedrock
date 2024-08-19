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
