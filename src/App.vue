<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto space-y-4 md:space-y-8 p-4 md:p-8 text-black dark:text-neutral-200">
    <div id="banner" class="flex flex-col items-center rounded-lg bg-neutral-900 shadow-lg">
      <img class="w-9/12" src="./assets/img/banner.png" loading="lazy" />
    </div>

    <div id="tutorial" class="flex flex-col rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
      <details class="space-y-4">
        <summary class="text-2xl">CODEWALKER</summary>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">1. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">
              Press <kbd>space</kbd> + <kbd>T</kbd> and
              <img src="./assets/img/codewalker_bar.png" alt="codewalker-bar" class="inline-img" />
            </li>
            <li class="pl-4">Export: Building's YDR, TEXTURES, YBN (HI and normal), YMAP and OCCLUSION</li>
            <li class="pl-4">Export: Terrain/Ground YDR, TEXTURES, YBN and YMAP</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">8. Import</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Open the folder of the project and import all the files</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">9. Create YMAP</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select the paper icon and rename the map1.ymap</li>
            <li class="pl-4">Select YMAP -> New Entity and add the collision file name</li>
            <li class="pl-4">Select the ymap and calculate flags and extends</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">10. Generate Manifest</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select Tools -> Generate Manifest -> Generate -> Save and choose the file name</li>
          </ul>
        </details>
      </details>
      <details class="space-y-4">
        <summary class="text-2xl">BLENDER</summary>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">2. Import</summary>
          <div class="flex flex-row float-right">
            <div class="flex-col-3">
              <ul class="list-disc list-inside space-y-4 w-3/4">
                <li class="pl-4">Create Exterior, Interior and Reference Collections</li>
                <li class="pl-4">Select exterior collection</li>
                <li class="pl-4">Press <kbd>V</kbd> -> Import - YDR YBN OCCLUSION <span class="text-red-600">(NOT YMAPS YET!)</span></li>
                <li class="pl-4">Press <kbd>V</kbd> -> Find Missing Textures</li>
                <li class="pl-4">Import YMAPS and make sure you have INSTANCED ENTITIES DISABLED on the right side</li>
                <li class="pl-4">Delete both Building and Terrain YMAP if you don't need to edit the car spawn</li>
              </ul>
            </div>
            <div class="flex flex-row">
              <!-- <img src="./assets/img/collections.png" alt="collections" class="float-right" /> -->
              <img src="./assets//img/blender_import.png" alt="blender-import" class="float-right" />
              <img src="./assets//img/import_ymap.png" alt="blender-import-ymap" class="float-right w-1/4" />
            </div>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">3. Edit Exterior</summary>
          <div class="flex flex-row">
            <ul class="list-disc list-inside space-y-4">
              <li class="pl-4">Press <kbd>tab</kbd> to change to edit mode and press <kbd>3</kbd> to select face mode</li>
              <li class="pl-4">Press <kbd>A</kbd> to highlight all faces and press <kbd>Alt + J</kbd> to transform tris to quads</li>
              <li class="pl-4">Select the doors and the windows, Press <kbd>L</kbd> to select all linked faces</li>
              <li class="pl-4">Press <kbd>X</kbd> -> faces to remove the doors and windows</li>
              <li class="pl-4">Go back to object mode, press <kbd>tab</kbd></li>
              <li class="pl-4">Make sure you selected the exterior collection</li>
              <li class="pl-4">Enable snap on edges and check Align Rotation To Target</li>
              <li class="pl-4">Add a new plane, press <kbd>Shift + A</kbd> and select mesh -> plane</li>
              <li class="pl-4">Press <kbd>G</kbd> to snap the plane to the desired edge</li>
              <li class="pl-4">Select the object tab (orange square symbol)</li>
              <li class="pl-4">Change the rotation of the X and Y axis to 0</li>
              <li class="pl-4">Change the snap to vertex and disable align rotation to target</li>
              <li class="pl-4">Press <kbd>G</kbd> again to move the plane to the door</li>
              <li class="pl-4">In edit and face mode, Select global at the top center and click the + button</li>
              <li class="pl-4">In edit and edge mode, change the plane dimension selecting an edge and pressing <kbd>G, X or Y</kbd></li>
              <li class="pl-4">Select an edge pressing <kbd>alt + lmb</kbd> to select all edges at the same</li>
              <li class="pl-4">Press <kbd>E Z</kbd> and move the cursor to the roof vertex to create the walls</li>
              <li class="pl-4">Press <kbd>ctrl + R</kbd> to create a loop cut in the wall</li>
              <li class="pl-4">Press <kbd>lmb</kbd> to choose horizontal or vertical cut</li>
              <li class="pl-4">Move the cursor to the vertex and press <kbd>lmb</kbd> (you can scroll to create more loop cuts)</li>
              <li class="pl-4">Press <kbd>X</kbd> -> faces to remove the faces you don't need</li>
            </ul>
            <div class="grid grid-cols-2 gap-4">
              <img src="./assets/img/blender_tris_quads.png" alt="blender-tris-quads" class="float-right w-80" />
              <!-- <img src="./assets/img/obj_symbol.png" alt="blender-obj-symbol" class="float-right w-10" /> -->
              <img src="./assets/img/obj_menu.png" alt="blender-obj-menu" class="float-right w-80" />
              <img src="./assets/img/blender_global.png" alt="blender-global" class="float-right w-80" />
              <img src="./assets/img/snap_edge_align.png" alt="blender-snap-edge-align" class="float-right w-80" />
            </div>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">4. Collision Edit</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Remove the doors, not the windows. Loop cut if needed</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">5. Occlusion Edit</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Press <kbd>delete</kbd> to remove the cubes you don't need</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">6. Create Archetype Definition</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select Archetype Definition</li>
            <li class="pl-4">Press + symbol and choose the name (can be the nmae of the project e.g. yourName_projectName)</li>
            <li class="pl-4">Select the shell drawable and click Auto-Create from selection as base</li>
            <li class="pl-4">Select the collision composite and click Auto-Create from selection as MLO</li>
            <li class="pl-4">Click Create Limbo Room, Click + and rename to room1</li>
            <li class="pl-4">Remove the limbo timecycle and change the room1 floor id to 1</li>
            <li class="pl-4">Change the room flags to 96 (Reduce Cars and Reduce Peds) in all the of them including limbo</li>
            <li class="pl-4">Click Portals</li>
            <li class="pl-4">Move to edit and vertex mode</li>
            <li class="pl-4">Select 4 the vertex/corners of the doors and windows</li>
            <li class="pl-4">Click create portal</li>
            <li class="pl-4">Select Entities</li>
            <li class="pl-4">Select the shell drawable</li>
            <li class="pl-4">Click Add object as entity</li>
            <li class="pl-4">Change the room to limbo and the LOD to 100</li>
            <li class="pl-4">Add all the props the same way</li>
            <li class="pl-4">Create entity sets if you want and set all the props you want to the specific entitiy set (e.g. xmas props)</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">7. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Press <kbd>V</kbd> -> Export (delect Selected Objects) to export everything</li>
          </ul>
        </details>
      </details>

      <details class="space-y-4">
        <summary class="text-2xl">11. Stream folder</summary>
        <ul class="list-disc list-inside space-y-4">
          <li class="pl-4">
            Create the stream folder inside the resources folder
            <p class="pl-8">
              Drag all files from RPF Explorer to the stream folder<br />
              resources/«map_name»/stream/«ydr;ybn;ymap;ytyp;ymf;ydd;yft»<br />
              resources/«map_name»/manifest.lua
            </p>
            <p class="pl-8 pt-4">manifest.lua<br><code>fx_version 'cerulean'<br />game 'gta5'<br />this_is_a_map 'yes'</code></p>
          </li>
        </ul>
      </details>
    </div>

    <div id="flags" class="grid grid-flow-row md:grid-flow-col gap-x-16 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
      <details class="space-y-4">
        <summary class="text-2xl">FLAGS</summary>
        <details class="space-y-4 px-6">
          <summary class="text-xl">YTYP Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              FLAG_IS_FIXED<br /><br />
              Entity is Fixed/will not interact with Dynamic objects. Enables indestructibility for archetype, making it static for props.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 7 / 0x00000080 // 128<br /><br />
              FLAG_TOUGHFORBULLETS<br /><br />
              This flag is used in instanced archetypes, used in instancedData in #map files.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              FLAG_HAS_ANIM<br /><br />
              This flag is used in archetypes with bones inside models (YCD).
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              FLAG_HAS_UVANIM<br /><br />
              This flag is used in archetypes with UV animations (YCD).
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 11 / 0x00000800 // 2048<br /><br />
              FLAG_SHADOW_ONLY<br /><br />
              Blocks lights and shadows and does not render the model. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 13 / 0x00002000 // 8192<br /><br />
              FLAG_DONT_CAST_SHADOWS<br /><br />
              Object will not cast Shadows (Used with overlays/decals). [Credits to Dekurwinator]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 16 / 0x00010000 // 65536<br /><br />
              FLAG_IS_TREE<br /><br />
              Double-sided rendering. [Credits to cpmodding]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 17 / 0x00020000 // 131072<br /><br />
              FLAG_IS_TYPE_OBJECT<br /><br />
              This flag enables destructibility for archetype, making it dynamic for props.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 19 / 0x00080000 // 524288<br /><br />
              FLAG_AUTOSTART_ANIM<br /><br />
              Allows playing YCD animations on dynamic objects.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 26 / 0x04000000 // 67108864<br /><br />
              FLAG_DOOR_PHYSICS<br /><br />
              Enables a special attribute for door archetypes. [Credits to Dekurwinator]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 28 / 0x10000000 // 268435456<br /><br />
              FLAG_DONT_AVOID_BY_PEDS<br /><br />
              Disables red vertex channel for object. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 29 / 0x20000000 // 536870912<br /><br />
              FLAG_USE_AMBIENT_SCALE<br /><br />
              Disables green vertex channel for object, preventing glowing at night.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 30 / 0x40000000 // 1073741824<br /><br />
              FLAG_IS_DEBUG<br /><br />
              Disables blue vertex channel for object.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 31 / 0x80000000 // 2147483648<br /><br />
              FLAG_HAS_ALPHA_SHADOW<br /><br />
              Disables Alpha vertex channel for object.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">Special Attributes</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 2<br /><br />
              MODEL_ATTRIBUTE_IS_LADDER<br /><br />
              Defines a ladder model.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 3<br /><br />
              MODEL_ATTRIBUTE_IS_TRAFFIC_LIGHT<br /><br />
              Traffic lights use this - Enables the Green/Yellow/Red Lights.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 4<br /><br />
              MODEL_ATTRIBUTE_IS_BENDABLE_PLANT<br /><br />
              If enabled, the plant model will bend when driven through.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 5<br /><br />
              MODEL_ATTRIBUTE_IS_GARAGE_DOOR<br /><br />
              The door will move up/down 90 degrees (garage doors).
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 6<br /><br />
              MODEL_ATTRIBUTE_MLO_WATER_LEVEL<br /><br />
              If enabled, the water level for MLOs is set by this model.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 7<br /><br />
              MODEL_ATTRIBUTE_IS_NORMAL_DOOR<br /><br />
              The door will open when pushed by a player/ped/vehicle.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 8<br /><br />
              MODEL_ATTRIBUTE_IS_SLIDING_DOOR<br /><br />
              The door will slide left/right when the player approaches.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 9<br /><br />
              MODEL_ATTRIBUTE_IS_BARRIER_DOOR<br /><br />
              The door moves when in contact with a player, in 90 degrees to the left.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 10<br /><br />
              MODEL_ATTRIBUTE_IS_SLIDING_DOOR_VERTICAL<br /><br />
              The door automatically opens vertically in a straight line up/down when the player approaches.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 11<br /><br />
              MODEL_ATTRIBUTE_NOISY_BUSH<br /><br />
              Procedural plants/weeds/bushes use this attribute.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 12<br /><br />
              MODEL_ATTRIBUTE_IS_RAIL_CROSSING_DOOR<br /><br />
              Only used for rail crossings. The door will move in contact with a player at a 90-degree angle to the left.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 16<br /><br />
              MODEL_ATTRIBUTE_RUMBLE_ON_LIGHT_COLLISION_WITH_VEHICLE<br /><br />
              If enabled, it will cause a rumble on light collision by a vehicle.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 17<br /><br />
              MODEL_ATTRIBUTE_IS_RAIL_CROSSING_LIGHT<br /><br />
              This model is a rail crossing light.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 30<br /><br />
              MODEL_ATTRIBUTE_CLOCK<br /><br />
              This model is a clock.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 31<br /><br />
              MODEL_ATTRIBUTE_IS_TREE_DEPRECATED<br /><br />
              Deprecated way of defining a tree model.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Value 32<br /><br />
              MODEL_ATTRIBUTE_IS_STREET_LIGHT<br /><br />
              This model is a street light.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">MLO Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              INSTANCE_MLO_GPS_ON<br /><br />
              GPS is available in mlo instance.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">MLO Entities Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              FLAG_FULLMATRIX<br /><br />
              Allow full rotation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              FLAG_STREAM_LOWPRIORITY<br /><br />
              Seems to be used on destructable/interactive props - props that are of this type will fall through the map/interior if this flag is not enabled. [Credits to Carl Johnson]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              FLAG_DONT_INSTANCE_COLLISION<br /><br />
              Disable embbedded collisions.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 3 / 0x00000008 // 8<br /><br />
              FLAG_LOD_IS_IN_PARENT_MAPDATA<br /><br />
              Seems to be used on non destructable/intercative props like trees? [Credits to Carl Johnson]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 4 / 0x00000010 // 16<br /><br />
              FLAG_LOD_ADOPTME<br /><br />
              Seems to used on LODs.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              FLAG_IS_FIXED<br /><br />
              Static entity - Entity is Invincible/will not interact with dymaic Dynamic.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              FLAG_IS_INTERIOR_LOD<br /><br />
              Object does not get dark at night time? [Credits to Mellowtri]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              DISABLE_EMBEDDED_LIGHTSOURCE<br /><br />
              Disable embedded light source.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 18 / 0x00040000 // 262144<br /><br />
              FLAG_DOESNOTSPAWNPEDS<br /><br />
              Disable archetype extensions. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 19 / 0x00080000 // 524288<br /><br />
              FLAG_LIGHTS_CAST_STATIC_SHADOWS<br /><br />
              Seems to be used on almost everything - should be used by default.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 20 / 0x00100000 // 1048576<br /><br />
              FLAG_LIGHTS_CAST_DYNAMIC_SHADOWS<br /><br />
              Seems to be used on almost everything - should be used by default.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 22 / 0x00400000 // 4194304<br /><br />
              FLAG_DONT_RENDER_IN_SHADOWS<br /><br />
              Object will not cast shadows.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 23 / 0x00800000 // 8388608<br /><br />
              FLAG_ONLY_RENDER_IN_SHADOWS<br /><br />
              Object will not render but still cast shadows.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 24 / 0x01000000 // 16777216<br /><br />
              FLAG_DONT_RENDER_IN_REFLECTIONS<br /><br />
              Dont render entity in reflections.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 25 / 0x02000000 // 33554432<br /><br />
              FLAG_ONLY_RENDER_IN_REFLECTIONS<br /><br />
              Only render entity in reflections.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 26 / 0x04000000 // 67108864<br /><br />
              FLAG_DONT_RENDER_IN_WATER_REFLECTIONS<br /><br />
              Dont render entity in water reflections.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 27 / 0x08000000 // 134217728<br /><br />
              FLAG_ONLY_RENDER_IN_WATER_REFLECTIONS<br /><br />
              Only render entity in water reflections.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 28 / 0x10000000 // 268435456<br /><br />
              FLAG_DONT_RENDER_IN_MIRROR_REFLECTIONS<br /><br />
              Dont render entity in mirror reflections.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 29 / 0x20000000 // 536870912<br /><br />
              FLAG_ONLY_RENDER_IN_MIRROR_REFLECTIONS<br /><br />
              Only render entity in mirror reflections.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">Room Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              ROOM_FREEZEPEDS<br /><br />
              Controls whether if shooting a gun in a interior will or will not alert the police. It would have something to do with sound from inside to MLO is heard outside. Should be used in homes or private property, but only in rooms that are private like bedrooms, bathrooms and not in common or open rooms like living, dinning and kitchens. Example enabled: https://www.youtube.com/watch?v=PV2hZy2oZYg Example disabled: https://www.youtube.com/watch?v=DGUQBz9lJ88
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              ROOM_NO_DIR_LIGHT<br /><br />
              Disables Interior shadowcasting in exterior. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              ROOM_REDUCE_CARS<br /><br />
              Reduces vehicle population creating by 66% (applies 0.33 modifier) when player is in this room. [Credits to Disquse]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              ROOM_REDUCE_PEDS<br /><br />
              Reduces peds population creating by 66% (applies 0.33 modifier) when player is in this room. [Credits to Disquse]
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">Portal Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              INTINFO_PORTAL_ONE_WAY<br /><br />
              You can see from the interior to the exterior, but not vice versa. Used for windows in interiors such as the ammunation in Vinewood. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              INTINFO_PORTAL_LINK<br /><br />
              You can see from the exterior into the interior, but not vice versa. Used for connecting two MLOs together, such as V_MICHAEL and V_MICHAEL_GARAGE. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              INTINFO_PORTAL_MIRROR<br /><br />
              Mirror. No direct entrance? [Credits to dexyfex]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 3 / 0x00000008 // 8<br /><br />
              INTINFO_PORTAL_IGNORE_MODIFIER<br /><br />
              Portal will render the outside with much more bloom. Generaly windows use this. Will not only make a portal appear with more bloom but will also make the player NOT glow when you are near the portal (so a portal to limbo room without flag 8 will cause a player to glow when near)
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              INTINFO_PORTAL_LOWLODONLY<br /><br />
              Renders limbo as LOD. Used in the roof window of V_MICHAEL. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              INTINFO_PORTAL_ALLOWCLOSING<br /><br />
              Disable portal while a door is closed as an attached entity. Note that Rockstar frequently uses this portal, even when there are not any attached entities. May have other functions. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 8 / 0x00000100 // 256<br /><br />
              INTINFO_PORTAL_MIRROR_USING_PORTAL_TRAVERSAL<br /><br />
              Enables limbo portals in mirror portal reflections, but does not enable limbo entities. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              INTINFO_PORTAL_MIRROR_CAN_SEE_EXTERIOR_VIEW<br /><br />
              Renders limbo entities in portal reflections. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 13 / 0x00002000 // 8192<br /><br />
              INTINFO_PORTAL_USE_LIGHT_BLEED<br /><br />
              Tells the portal to blend the timecycle with the outside world so when the player is near the portal, the room time cycle is blended with the outside world. Makes see through glass doors? Interior timecycle farclipping gets ignored and the entire world distance is rendered.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">CarGen Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              CARGEN_FORCESPAWN<br /><br />
              Seems to make the cargen almost-always spawn. [Credits to Monky]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              CARGEN_POLICE<br /><br />
              Spawns police police2 police3 policeb or sherrif.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 3 / 0x00000008 // 8<br /><br />
              CARGEN_FIRETRUCK<br /><br />
              Spawns 'firetruk'.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 4 / 0x00000010 // 16<br /><br />
              CARGEN_AMBULANCE<br /><br />
              Spawns 'ambulance'.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              CARGEN_DURING_DAY<br /><br />
              Only spawn cars during day (Between 06:00 and 22:00). Commonly used.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              CARGEN_AT_NIGHT<br /><br />
              Only spawn cars during night (Between 22:00 and 06:00). Commonly used.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 7 / 0x00000080 // 128<br /><br />
              CARGEN_ALIGN_LEFT<br /><br />
              Moves the car spawn closer to the aligned side. Can not be combined with CARGEN_ALIGN_RIGHT.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 8 / 0x00000100 // 256<br /><br />
              CARGEN_ALIGN_RIGHT<br /><br />
              Moves the car spawn closer to the aligned side. Can not be combined with CARGEN_ALIGN_LEFT.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              CARGEN_SINGLE_PLAYER<br /><br />
              Only create this car generator in singleplayer.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              CARGEN_NETWORK<br /><br />
              Only create this car generator in active multiplayer sessions.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 11 / 0x00000800 // 2048<br /><br />
              CARGEN_LOW_PRIORITY<br /><br />
              Game decides in some cases to deactivate this car generator.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 12 / 0x00001000 // 4096<br /><br />
              CARGEN_PREVENT_ENTRY<br /><br />
              ??? Prevent entering vehicle if not allowed?
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">Light Attribute Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 7 / 0x00000080 // 128<br /><br />
              LIGHTFLAG_CAST_STATIC_GEOM_SHADOWS<br /><br />
              Objects that do not move will have shadows casted. Excludes moving parts such as players, moving props and vehicles.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 8 / 0x00000100 // 256<br /><br />
              LIGHTFLAG_CAST_DYNAMIC_GEOM_SHADOWS<br /><br />
              Objects that move will cast shadows. Includes moving parts such as player, moving props and vehicles.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              LIGHTFLAG_CALC_FROM_SUN<br /><br />
              Will turn light into a so-called sunlight. The light will change its color and intensity depending on the time of day. Will disable when there is no sun light. Color and intensity is primary affected by factors such as time, weather and light property intensity.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              LIGHTFLAG_ENABLE_BUZZING<br /><br />
              Electrical Hum [1]. Light will produce an audible hum.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 11 / 0x00000800 // 2048<br /><br />
              LIGHTFLAG_FORCE_BUZZING<br /><br />
              Electrical Hum [2] (Audio hum). Light will produce an audible hum.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 12 / 0x00001000 // 4096<br /><br />
              LIGHTFLAG_DRAW_VOLUME<br /><br />
              Lights will have a volumetric cone casted. Use the 'Light Volume' section in GIMS Evo to control this.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 13 / 0x00002000 // 8192<br /><br />
              LIGHTFLAG_NO_SPECULAR<br /><br />
              Light will not cast reflections on materials. Light will not affect specular properties in the environment. Will turn light into a so-called 'fill light'
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 15 / 0x00008000 // 32768<br /><br />
              LIGHTFLAG_CORONA_ONLY<br /><br />
              Disables the light. Purpose unknown. Perhaps there is a trigger that will activate the light under some condition.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 16 / 0x00010000 // 65536<br /><br />
              LIGHTFLAG_NOT_IN_REFLECTION<br /><br />
              Deactivates the light in a mirror portal. [Credits to Gusepe73]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 17 / 0x00020000 // 131072<br /><br />
              LIGHTFLAG_ONLY_IN_REFLECTION<br /><br />
              Invisible corona (can be visible in menu only).
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 18 / 0x00040000 // 262144<br /><br />
              LIGHTFLAG_USE_CULL_PLANE<br /><br />
              Enable culling plane, stopping the light from casting after some value x,y,z normal plane followed by distance; x=1, y=2, z=3, distance =4 (1,2,3,4) [x,y,z,d]. [Credits to DPS]
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 20 / 0x00100000 // 1048576<br /><br />
              LIGHTFLAG_CAST_HIGHER_RES_SHADOWS<br /><br />
              bump the shadow cache priority for this light so it will use hires shadow maps sooner than it's screen space size would suggest
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 21 / 0x00200000 // 2097152<br /><br />
              LIGHTFLAG_CAST_ONLY_LOWRES_SHADOWS<br /><br />
              never use hires shadow map for this light, even if it's really up close
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 23 / 0x00800000 // 8388608<br /><br />
              LIGHTFLAG_DONT_LIGHT_ALPHA<br /><br />
              Don't cast light onto glass material (tentative for exact function however this is the first thing i noticed)
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 26 / 0x04000000 // 67108864<br /><br />
              LIGHTFLAG_MOVING_LIGHT_SOURCE<br /><br />
              runtime flag that lets the shadow code know this light moves a lot and might self shadow, to it needs to update late (with the current frames light position)
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 27 / 0x08000000 // 134217728<br /><br />
              LIGHTFLAG_USE_VEHICLE_TWIN<br /><br />
              used for detecting special twin lights
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 30 / 0x40000000 // 1073741824<br /><br />
              LIGHTFLAG_DELAY_RENDER<br /><br />
              used by cutscenes to create shadow casting lights a frame early and avoid any visible pops
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 31 / 0x80000000 // 2147483648<br /><br />
              LIGHTFLAG_ALREADY_TESTED_FOR_OCCLUSION<br /><br />
              Internaly set by light occlusion processing to mark that this light has already passed the IsVisible check so it can be skipped when adding the light
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">YMAP Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              FLAG_MANUAL_STREAM_ONLY<br /><br />
              This flag forces file to be enabled/disabled by REQUEST_IPL native.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              FLAG_IS_PARENT<br /><br />
              This flag is set to determine LOD objects in entities array.
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">YMAP Content Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              CONTENTFLAG_ENTITIES_HD<br /><br />
              This map has high detail map data
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              CONTENTFLAG_ENTITIES_LOD<br /><br />
              This map contains LOD entities
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              CONTENTFLAG_ENTITIES_CONTAINERLOD<br /><br />
              This map contains LOD entities type, as SLOD2 and higher
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 3 / 0x00000008 // 8<br /><br />
              CONTENTFLAG_MLO<br /><br />
              This map contains interior instance
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 4 / 0x00000010 // 16<br /><br />
              CONTENTFLAG_BLOCKINFO<br /><br />
              This map contains SLOD1 entities type
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              CONTENTFLAG_OCCLUDER<br /><br />
              This map contains box/model occluders
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              CONTENTFLAG_ENTITIES_USING_PHYSICS<br /><br />
              This map contains physics instances
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 7 / 0x00000080 // 128<br /><br />
              CONTENTFLAG_LOD_LIGHTS<br /><br />
              This map contains LOD lights
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 8 / 0x00000100 // 256<br /><br />
              CONTENTFLAG_DISTANT_LOD_LIGHTS<br /><br />
              This map contains distant LOD lights
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              CONTENTFLAG_ENTITIES_CRITICAL<br /><br />
              This map is ‘critical’ and should be placed in the ‘critical’ box streamer slot. Used for maps with tall objects such as lamp posts and trees.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              CONTENTFLAG_INSTANCE_LIST<br /><br />
              This map contains grass instances from instancedData in fwMapData
            </p>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-xl">Anim Flags</summary>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 0 / 0x00000001 // 1<br /><br />
              AF_LOOPING<br /><br />
              Keep repeating animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 1 / 0x00000002 // 2<br /><br />
              AF_HOLD_LAST_FRAME<br /><br />
              Stop animation at the last animation frame.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 2 / 0x00000004 // 4<br /><br />
              AF_REPOSITION_WHEN_FINISHED<br /><br />
              Matches the peds physical representation position with the visual representation position after the animation ended.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 3 / 0x00000008 // 8<br /><br />
              AF_NOT_INTERRUPTABLE<br /><br />
              Animation can't be interrupted by external events.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 4 / 0x00000010 // 16<br /><br />
              AF_UPPERBODY<br /><br />
              Only animate upper body of ped model.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 5 / 0x00000020 // 32<br /><br />
              AF_SECONDARY<br /><br />
              Animation runs in the secondary task slot which enables the player to for example move.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 6 / 0x00000040 // 64<br /><br />
              AF_REORIENT_WHEN_FINISHED<br /><br />
              Matches the peds physical representation direction with the visual representation direction after the animation ended.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 7 / 0x00000080 // 128<br /><br />
              AF_ABORT_ON_PED_MOVEMENT<br /><br />
              Ends the animation as soon as the ped tries to move.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 8 / 0x00000100 // 256<br /><br />
              AF_ADDITIVE<br /><br />
              Playback the animation additively. Only works with special animations.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 9 / 0x00000200 // 512<br /><br />
              AF_TURN_OFF_COLLISION<br /><br />
              Disables collision direction while animation is playing.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 10 / 0x00000400 // 1024<br /><br />
              AF_OVERRIDE_PHYSICS<br /><br />
              Do not apply any physic forces while animation is playing. Also turns off collision
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 11 / 0x00000800 // 2048<br /><br />
              AF_IGNORE_GRAVITY<br /><br />
              Do not apply gravity while animation is playing.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 12 / 0x00001000 // 4096<br /><br />
              AF_EXTRACT_INITIAL_OFFSET<br /><br />
              Extracts the initial offset of the playback position. To be used when playing synced animations on different peds.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 13 / 0x00002000 // 8192<br /><br />
              AF_EXIT_AFTER_INTERRUPTED<br /><br />
              Exits the animation after getting interrupted by a different task (e.g. Natural Motion)
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 14 / 0x00004000 // 16384<br /><br />
              AF_TAG_SYNC_IN<br /><br />
              Sync the animation whilst blending in
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 15 / 0x00008000 // 32768<br /><br />
              AF_TAG_SYNC_OUT<br /><br />
              Sync the animation whilst blending out.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 16 / 0x00010000 // 65536<br /><br />
              AF_TAG_SYNC_CONTINUOUS<br /><br />
              Sync the animation all the time.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 17 / 0x00020000 // 131072<br /><br />
              AF_FORCE_START<br /><br />
              Force the animation to start even if the ped is falling, ragdolling, ...
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 18 / 0x00040000 // 262144<br /><br />
              AF_USE_KINEMATIC_PHYSICS<br /><br />
              Use the kinematic physics mode on the entity for the duration of the animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 19 / 0x00080000 // 524288<br /><br />
              AF_USE_MOVER_EXTRACTION<br /><br />
              Updates the peds capsule position every frame based on the animation. Used with USE_KINEMATIC_PHYSICS.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 20 / 0x00100000 // 1048576<br /><br />
              AF_HIDE_WEAPON<br /><br />
              Hides the weapon during animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 21 / 0x00200000 // 2097152<br /><br />
              AF_ENDS_IN_DEAD_POSE<br /><br />
              Kills the ped after the animation finished.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 22 / 0x00400000 // 4194304<br /><br />
              AF_ACTIVATE_RAGDOLL_ON_COLLISION<br /><br />
              If the peds ragdoll makes contact with anything physical active ragdoll and fall over.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 23 / 0x00800000 // 8388608<br /><br />
              AF_DONT_EXIT_ON_DEATH<br /><br />
              Prevents secondary animation task to end on death.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 24 / 0x01000000 // 16777216<br /><br />
              AF_ABORT_ON_WEAPON_DAMAGE<br /><br />
              Cancels the animation on damage events. Also works if NOT_INTERRUPTABLE is set.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 25 / 0x02000000 // 33554432<br /><br />
              AF_DISABLE_FORCED_PHYSICS_UPDATE<br /><br />
              Prevent adjusting the capsule on the enter state of the animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 26 / 0x04000000 // 67108864<br /><br />
              AF_PROCESS_ATTACHMENTS_ON_START<br /><br />
              Forces the attachments to be processed at the start of the animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 27 / 0x08000000 // 134217728<br /><br />
              AF_EXPAND_PED_CAPSULE_FROM_SKELETON<br /><br />
              Expands the capsule to the extents of the skeleton.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 28 / 0x10000000 // 268435456<br /><br />
              AF_USE_ALTERNATIVE_FP_ANIM<br /><br />
              Plays an alternative version of the animation if the player is in first person mode.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 29 / 0x20000000 // 536870912<br /><br />
              AF_BLENDOUT_WRT_LAST_FRAME<br /><br />
              Starts blending out the animation earlier, so that blend out duration finishes with the animation.
            </p>
            <p class="rounded-lg justify-center bg-neutral-100 dark:bg-neutral-800 shadow-lg p-4 break-words">
              Flag 30 / 0x40000000 // 1073741824<br /><br />
              AF_USE_FULL_BLENDING<br /><br />
              Use full blending for this anim and override the heading/position adjustment.
            </p>
          </div>
        </details>
      </details>
    </div>

    <div id="assets" class="grid grid-flow-row md:grid-flow-col gap-x-80 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
      <div>
        <h2 class="text-2xl mb-4">Textures:</h2>
        <ul class="list-none list-inside space-y-2">
          <li class="pl-4"><a class="underline" href="https://polyhaven.com/textures">Poly Haven</a></li>
          <li class="pl-4"><a class="underline" href="https://ambientcg.com">AmbientCG</a></li>
          <li class="pl-4"><a class="underline" href="https://3dtextures.me/tag/floor/">3D Textures</a></li>
          <li class="pl-4"><a class="underline" href="https://altv.stuyk.com/docs/mapping/textures.html">Texture Information</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl mb-4">Discord Servers:</h2>
        <ul class="list-none list-inside space-y-2">
          <li class="pl-4"><a class="underline" href="https://discord.gg/codewalker">CodeWalker</a></li>
          <li class="pl-4"><a class="underline" href="https://discord.gg/U6damJ24">Sollumz</a></li>
          <li class="pl-4"><a class="underline" href="https://discord.gg/kRDkheaf">Pleb Masters</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl mb-4">Useful Links:</h2>
        <ul class="list-none list-inside space-y-2">
          <li class="pl-4"><a class="underline" href="https://download.blender.org/release/Blender4.1/">Blender 4.1.1</a></li>
          <li class="pl-4"><a class="underline" href="https://github.com/Sollumz/Sollumz/releases">Sollumz Releases</a></li>
          <li class="pl-4"><a class="underline" href="https://www.gta5-mods.com/tools/codewalker-gtav-interactive-3d-map">Codewalker</a></li>
          <li class="pl-4"><a class="underline" href="https://forge.plebmasters.de/">Pleb Masters</a></li>
          <li class="pl-4"><a class="underline" href="https://blendermarket.com/products/machin3tools">Machin3Tools - $4.99 - Optional</a></li>
        </ul>
      </div>
    </div>

    <div id="extensions" class="text-xl flex flex-col items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
      <h2 class="underline text-2xl mb-4">FILE EXTENSIONS</h2>
      <p>
        YMAP - location on the map and gets the information from the ytyp<br />
        YTYP - Y-Type, this file contains the metadata (linked objects, portals etc) of the type of file we are creating .e.g an MLO<br />
        YDR - model/mesh visual file<br />
        YBN - Collision file<br />
        OCCLUSION - blocks the render<br />
        YDD - LOD to see the building far away, low poly YDR<br />
        YFT - fragmented prop that can be destroyed
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
