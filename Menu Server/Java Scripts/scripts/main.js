import * as mc from '@minecraft/server';
import * as ui from '@minecraft/server-ui';

// คอมเม้น: การสร้าง Main และ การประกาศตัวแปร

mc.world.afterEvents.itemUse.subscribe(data => {
    const player = data.source;
    const item = data.itemStack;
    if (item.typeId === 'minecraft:compass') {
        showMenu1(player);
    }
});

//  คอมเม้น: การใช้ Function เพื่อสร้างเมนู 
// ตั้งชื่อว่า function showMenu

function showMenu1(player) {
    const form = new ui.ActionFormData();
    form.title(' : Menu Compass 1');
    form.body(' - > Click is now');
    form.button('Button 1', 'textures/items/apple');
    form.button('Button 2', 'textures/items/diamond');
    form.button('Button 3', 'textures/items/enchanted_book');
    form.button('Button 4', 'textures/items/ender_pearl');
    form.button('Button 5', 'textures/blocks/barrier');
    form.button('Back');

//  คอมเม้น: ตั้งปุ่มให้ทำงานอย่างไร
// function showMenu ให้ตรงกับ case 0: showEmotes(player); break;

// player.runCommandAsync(` คอมมาน`); break; การใช้คอมมาน
// showMenu1(player); break; เป็นการใช้ไปที่ -> function showMenu1(player)

    form.show(player).then(response => {
        switch (response.selection) {
            case 0: player.runCommandAsync(`give @s apple`); break;
            case 1: player.runCommandAsync(`give @s diamond`); break;
            case 2: player.runCommandAsync(`give @s enchanted_book`); break;
            case 3: player.runCommandAsync(`say test1`); break;
            case 4: showMenu2(player); break;
            case 5: break;
        }
    });
    


    // showMenu1(player); break; เป็นการใช้ไปที่ -> function showMenu2(player)
    function showMenu2(player) {
        const form = new ui.ActionFormData();
        form.title(' : Menu Compass 2');
        form.button('Back','textures/blocks/barrier');

        form.show(player).then(response => {
            switch (response.selection) {
                case 0: showMenu1(player); break;
            }
        });
    }
}

