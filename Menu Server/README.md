## Menu Server 
- Minecraft v 1.21.20+

### วิธีการทำ
- 📂 สร้างแฟ้มใน ตั้งชื่ออะไรก็ได้เป็น ภาษาอังกฤษ
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

mc.world.afterEvents.itemUse.subscribe(data => {
    const player = data.source;
    const item = data.itemStack;
    if (item.typeId === 'minecraft:recovery_compass') {
        showMenu(player);
    }
});

function showMenu(player) {
    const form = new ui.ActionFormData()
        .title(' Menu')
        .button('Emote Special', 'textures/emotes/icon_special')
        .button('Emote Normal', 'textures/emotes/icon_normal')
        .button('Emote Post', 'textures/emotes/icon_post')
        .button('Camera Perspective', 'textures/emotes/camara_main')
        .button('Free Camera', 'textures/emotes/Perspective')
        .button('Contact', 'textures/emotes/sleeplite');

    form.show(player).then(response => {
        switch (response.selection) {
            case 0: showEmotes(player); break;
            case 1: showEmoteGeneral(player); break;
            case 2: showEmotespost(player); break;
            case 3: showCameraMenu(player); break;
            case 4: showFreeCameraMenu(player); break;
            case 5: showContact(player); break;
        }
    });
}

const emoteData1 = [
    { btn_name: 'Twerking\n1', anim_id: 'perreo', command: 's ' },
    { btn_name: 'Helicopter\n2', anim_id: 'sneaking_4', command: 's ' },
    { btn_name: 'Take the T\n3', anim_id: 'baile_25', command: 's ' },
    { btn_name: 'Take the L\n4', anim_id: 'baile_18', command: 's ' },
    { btn_name: 'Llorar\n5', anim_id: 'llorar', command: 's ' },
    { btn_name: 'Aquiestoy\n6', anim_id: 'aquiestoy', command: 'say hi,' },
    { btn_name: 'Arigato\n7', anim_id: 'arigato', command: 's ' },
    { btn_name: 'Floss\n8', anim_id: 'baile', command: 's ' },
    { btn_name: 'Desperate\n9', anim_id: 'baile_21', command: 's ' },
    { btn_name: 'Lie Down\n10', anim_id: 'baile_16', command: 's ' },
    { btn_name: 'Best Mates\n11', anim_id: 'baile_19', command: 's ' },
    { btn_name: 'Dab\n12', anim_id: 'dab', command: 's ' },
    { btn_name: 'Flip\n13', anim_id: 'flip_atras', command: 's ' },
    { btn_name: 'Naca\n14', anim_id: 'naca', command: 's ' },
    { btn_name: 'Risa\n15', anim_id: 'risa', command: 's ' },
    { btn_name: 'T Pose\n16', anim_id: 't-pose', command: 's ' },
    { btn_name: 'Run\n17', anim_id: 'baile_24', command: 's ' },
    { btn_name: 'Zero Two\n18', anim_id: 'sneaking_1', command: 's ' }
]

const emoteData2 = [
    { btn_name: 'ชี้ไปทางขวา', anim_id: 'so14', command: 's '},
    { btn_name: 'ไม่ได้เลย', anim_id: 'so15', command: 's '},
    { btn_name: 'ชิลล์', anim_id: 'so13', command: 's '},
    { btn_name: 'เขินอาย', anim_id: 'so8', command: 's '},
    { btn_name: 'แอ็ค', anim_id: 'so1', command: 's '},    
    { btn_name: 'นั่งชิลล์', anim_id: 'so3', command: 's '},
    { btn_name: 'หมุนๆ', anim_id: 'so5', command: 's '},
    { btn_name: 'มายัง', anim_id: 'so7', command: 's '},
    { btn_name: 'มาแล้ว', anim_id: 'so9', command: 's '},
    { btn_name: 'ชี้ไปข้างบน', anim_id: 'so10', command: 's '},
    { btn_name: 'นั่งเศร้า', anim_id: 'so11', command: 's '},
    { btn_name: 'นอนกลางวัน', anim_id: 'so17', command: 's '},
    { btn_name: 'ปวดขาโว้ย', anim_id: 'so18', command: 's '},
    { btn_name: 'นั่งเล่น', anim_id: 'so19', command: 's '},
    { btn_name: 'Moon Walk', anim_id: 'so16', command: 's '},
    { btn_name: 'Size large', anim_id: 'so2', command: 's '},
    { btn_name: 'Size small', anim_id: 'so4', command: 's '},
    { btn_name: 'Size very small', anim_id: 'so6', command: 's '}
   
]

const emoteData3 = [
    { btn_name: 'ชี้ไปทางซ้าย', anim_id: 'play8', command: 's '},
    { btn_name: 'ท่าเตรียมต่อสู้', anim_id: 'play10', command: 's '},
    { btn_name: 'เรียบร้อย', anim_id: 'play13', command: 's '},
    { btn_name: 'ขอส่วนบุญ', anim_id: 'play12', command: 's '},
    { btn_name: 'นอนราบ', anim_id: 'play11', command: 's '},
    { btn_name: 'นั่งเล่น', anim_id: 'play17', command: 's '},
    { btn_name: 'นั่งพัก', anim_id: 'play2', command: 's '},
    { btn_name: 'นั่งแอ็คซ้าย', anim_id: 'play19', command: 's '},
    { btn_name: 'พับเพียบ', anim_id: 'play4', command: 's '},
    { btn_name: 'นั่งแอ็คขวา', anim_id: 'play5', command: 's '},
    { btn_name: 'จับมือซ้าย', anim_id: 'play6', command: 's '},
    { btn_name: 'จับมือขวา', anim_id: 'play7', command: 's '},
    { btn_name: 'เอนตัว', anim_id: 'play1', command: 's '},
    { btn_name: 'เอียง', anim_id: 'play9', command: 's '},
    { btn_name: 'ยืนแอ็ค', anim_id: 'play3', command: 's '},
    { btn_name: 'นอนชิลล์', anim_id: 'play14', command: 's '},
    { btn_name: 'พิงอยู่', anim_id: 'play15', command: 's '},
    { btn_name: 'ทำมาเพื่อ', anim_id: 'play16', command: 's '},
    { btn_name: 'พิงเก้าอี้', anim_id: 'play18', command: 's '}
]

function showEmotes(player) {
    const form = new ui.ActionFormData().title(' Emote');

    emoteData1.forEach(emote => {
        form.button(emote.btn_name, `textures/emotes/${emote.anim_id}`);
    });

    form.show(player).then(response => {
        if (response.selection < emoteData1.length) {
            const selectedEmote = emoteData1[response.selection];
            playEmote(player, `animation.${selectedEmote.anim_id}`, selectedEmote.command);
        } else {
            showMenu(player);
        }
    });
}

function showEmoteGeneral(player) {
    const form = new ui.ActionFormData()
        .title(` Emote General`)

    emoteData2.forEach(emote => {
        form.button(emote.btn_name, `textures/emotes/${emote.anim_id}`)
    })

    form.show(player).then(response => {
        if (response.selection < emoteData2.length) {
            const selectedEmote = emoteData2[response.selection];
            playEmote(player, `animation.${selectedEmote.anim_id}`, selectedEmote.command);
        } else {
            showMenu(player);
        }
    })
}

function showEmotespost(player) {
    const form = new ui.ActionFormData()
        .title(` Emote`)

    emoteData3.forEach(emote => {
        form.button(emote.btn_name, `textures/emotes/${emote.anim_id}`)
    })

    form.show(player).then(response => {
        if (response.selection < emoteData3.length) {
            const selectedEmote = emoteData3[response.selection];
            playEmote(player, `animation.${selectedEmote.anim_id}`, selectedEmote.command);
        } else {
            showMenu(player);
        }
    })
}

function showCameraMenu(player) {
    const form = new ui.ActionFormData()
        .title(` Camera Perspective`)
        .button(`FPP\n§7§7First Person`,`textures/emotes/FPP`)
        .button(`SPP\n§7Second Person`,`textures/emotes/SPP`)
        .button(`TPP\n§7Third Person`,`textures/emotes/TPP`)
        .button(`§cBack`)

    form.show(player).then(response => {
        switch (response.selection) {
            case 0: player.runCommandAsync(`camera @s clear`); break;
            case 1: player.runCommandAsync(`camera @s set minecraft:third_person`); break;
            case 2: player.runCommandAsync(`camera @s set minecraft:third_person_front`); break;
            case 3: showMenu(player); break;
        }
    })
}

function showFreeCameraMenu(player) {
    const form = new ui.ActionFormData()
        .title(` FreeCamer`)
        .button(`Camara clear`,`textures/emotes/Camaraclear`)
        .button(`Camara Zoom in 120`,`textures/emotes/Camara120`)
        .button(`Camara Zoom in 50`,`textures/emotes/Camara50`)
        .button(`Camara Zoom in 10`,`textures/emotes/Camara10`)
        .button(`Camara Zoom out 15`,`textures/emotes/Camara15`)
        .button(`Camara Zoom out 3 block`,`textures/emotes/CamaraOut`)
        .button(`§cBack`)

    form.show(player).then(response => {
        switch (response.selection) {
            case 0: player.runCommandAsync(`function camera/clear`); break;
            case 1: player.runCommandAsync(`function camera/3`); break;
            case 2: player.runCommandAsync(`function camera/4`); break;
            case 3: player.runCommandAsync(`function camera/5`); break;
            case 4: player.runCommandAsync(`function camera/6`); break;
            case 5: player.runCommandAsync(`function camera/7`); break;
            case 6: showMenu(player); break;
        }
    })
}

function showContact(player) {
    const form = new ui.ActionFormData()
        .title(` Contact`)
        .button(`Discord\ndiscord.gg/gtqfbmvTJK`,`textures/emotes/discord.png`)
        .button(`Tiktok\ntiktok.com/@sleeplite.official`,`textures/emotes/tiktok.png`)
        .button(`Youtube\nyoutube.com/@SleepliteOfficial`,`textures/emotes/youtube.png`)
        .button(`SolightzZ\ngithub.com/SolightzZ`,`textures/emotes/so.png`)
        .button(`§cBack`)

    form.show(player).then(response => {
        switch (response.selection) {
           case 0: showContact(player); break;
           case 1: showContact(player); break;
           case 2: showContact(player); break;
           case 3: showContact(player) ; break;
           case 4: showMenu(player); break;
        }
    })
}

function playEmote(player, animationId, command) {
    console.log(`Playing animation ${animationId} for player ${player.name}`);
    
    // Play the animation for the player using the emote
    player.playAnimation(animationId, {});

    // Notify all players about the animation, making it visible to them
    player.runCommandAsync(`execute @a ~ ~ ~ playanimation @s ${animationId} run`);
    
    if (command) {
        player.runCommandAsync(command).then(() => {
            console.log(`Executed command: ${command}`);
        }).catch(e => {
            console.error(`Failed to execute command: ${command}`, e);
        });
    }function playEmote(player, animationId, command) {
        console.log(`Playing animation ${animationId} for player ${player.name}`);
        
        // Play the animation for the player using the emote
        player.playAnimation(animationId, {});
    
        // Notify all players about the animation, making it visible to them
        player.runCommandAsync(`execute @a ~ ~ ~ playanimation @s ${animationId} run`);
        
        if (command) {
            player.runCommandAsync(command).then(() => {
                console.log(`Executed command: ${command}`);
            }).catch(e => {
                console.error(`Failed to execute command: ${command}`, e);
            });
        }
    }
}

```
