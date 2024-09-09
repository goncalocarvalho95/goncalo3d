<template>
  <div id="mlo" class="flex flex-col rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
    <details class="space-y-4">
      <summary class="text-2xl">MLO</summary>
      <details class="space-y-4">
        <summary class="text-2xl">CODEWALKER</summary>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">1. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">
              Press <kbd>space</kbd> + <kbd>T</kbd> and
              <img src="../assets/img/codewalker_bar.png" alt="codewalker-bar" class="inline-img" />
            </li>
            <li class="pl-4">Export: Building's YDR, TEXTURES, YBN (HI and normal), YMAP and OCCLUSION</li>
            <li class="pl-4">Export: Terrain/Ground YDR, TEXTURES, YBN and YMAP</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">9. Import</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Open the folder of the project and import all the files</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">10. Create YMAP</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select the paper icon and rename the map1.ymap</li>
            <li class="pl-4">Select YMAP -> New Entity and add the collision file name</li>
            <li class="pl-4">Select the ymap and calculate flags and extends</li>
          </ul>
        </details>

        <details class="space-y-4 px-6">
          <summary class="text-2xl">11. Generate Manifest</summary>
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
              <!-- <img src="../assets/img/collections.png" alt="collections" class="float-right" /> -->
              <img src="../assets//img/blender_import.png" alt="blender-import" class="float-right" />
              <img src="../assets//img/import_ymap.png" alt="blender-import-ymap" class="float-right w-1/4" />
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
              <img src="../assets/img/blender_tris_quads.png" alt="blender-tris-quads" class="float-right w-80" />
              <!-- <img src="../assets/img/obj_symbol.png" alt="blender-obj-symbol" class="float-right w-10" /> -->
              <img src="../assets/img/obj_menu.png" alt="blender-obj-menu" class="float-right w-80" />
              <img src="../assets/img/blender_global.png" alt="blender-global" class="float-right w-80" />
              <img src="../assets/img/snap_edge_align.png" alt="blender-snap-edge-align" class="float-right w-80" />
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
          <summary class="text-2xl">6. Interior</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Create a Plane</li>
            <li class="pl-4">Edit the Plane</li>
            <li class="pl-4">Duplicate 2x the Plane</li>
            <li class="pl-4">Convert to drawable and Composite</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">7. Create Archetype Definition</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select Archetype Definition</li>
            <li class="pl-4">Press the (+) symbol and choose the name of your archetype (It could be the name of the project e.g. yourName_projectName)</li>
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
          <summary class="text-2xl">8. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Press <kbd>V</kbd> -> Export (delete Selected Objects) to export everything</li>
          </ul>
        </details>
      </details>
      <details class="space-y-4">
        <summary class="text-2xl">12. Stream folder</summary>
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
    </details>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>