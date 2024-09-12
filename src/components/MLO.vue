<template>
  <div id="mlo" class="flex flex-col rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
    <details class="space-y-4">
      <summary class="text-2xl">MLO</summary>
      <details class="space-y-4">
        <summary class="text-2xl">CODEWALKER</summary>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">0. Configure</summary>
          <p>Open <code>CodeWalker.exe.config</code> and edit this lines:</p>
          <pre class="bg-neutral-800 rounded-lg overflow-x-auto">
            <code>
              &lt;setting name="WindowMaximized" serializeAs="String"&gt;
                &lt;value&gt;True&lt;/value&gt;
              &lt;/setting&gt;
              &lt;setting name="EnableMods" serializeAs="String"&gt;
                &lt;value&gt;True&lt;/value&gt;
              &lt;/setting&gt;
              &lt;setting name="DLC" serializeAs="String"&gt;
                &lt;value&gt;True&lt;/value&gt;
              &lt;/setting&gt;
            </code>
          </pre>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">1. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">
              Press <kbd>space</kbd> + <kbd>T</kbd> and select
              <img src="../assets/img/codewalker_bar.png" alt="codewalker-bar" class="inline-img" />
            </li>
            <li class="pl-4">Locate: Building's exterior for the MLO</li>
            <li class="pl-4">Export: Building's YDR, TEXTURES, YBN (HI and normal), YMAP and OCCLUSION</li>
            <li class="pl-4">Export: Terrain/Ground YDR, TEXTURES, YBN and YMAP</li>
            <li class="pl-4">In RPF Explorer, search the name of each file and press Shift + S to export as XML</li>
            <li class="pl-4">Save the textures under the materials tab</li>
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
          <div class="flex flex-row">
            <ul class="list-disc list-inside space-y-4 flex-1 md:w-1/2">
              <li class="pl-4">Create Exterior, Interior and Reference Collections</li>
              <li class="pl-4">Select exterior collection</li>
              <li class="pl-4">Press <kbd>V</kbd> -> Import - YDR YBN OCCLUSION <span class="text-red-600">(NOT YMAPS YET!)</span></li>
              <li class="pl-4">Press <kbd>V</kbd> -> Find Missing Textures</li>
              <li class="pl-4">Import YMAPS and make sure you have INSTANCED ENTITIES NOT ENABLED on the right side</li>
              <li class="pl-4">Delete both Building and Terrain YMAP if you don't need to edit the car spawn</li>
            </ul>
            <div class="overflow-x-scroll flex-1 md:w-1/2">
              <div class="flex flex-row min-w-max">
                <img src="../assets//img/blender_import.png" alt="blender-import" class="w-3/4 h-auto object-contain" />
                <img src="../assets//img/import_ymap.png" alt="blender-import-ymap" class="w-64 h-auto object-contain" />
              </div>
            </div>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">3. Edit Exterior Model</summary>
          <div class="flex flex-row">
            <ul class="list-disc list-inside space-y-4 flex-1 md:w-4/5">
              <li class="pl-4">Press <kbd>tab</kbd> to change to edit mode and press <kbd>3</kbd> to select face mode</li>
              <li class="pl-4">Press <kbd>A</kbd> to highlight all faces and press <kbd>Alt + J</kbd> to transform tris to quads</li>
              <li class="pl-4">Select the doors and the windows, Press <kbd>L</kbd> to select all linked faces</li>
              <li class="pl-4">Optional: Press <kbd>X</kbd> -> faces to remove the doors and windows</li>
              <li class="pl-4">Optional: Press <kbd>P</kbd> -> Separate by Selection and move them down, press <kbd>G Z</kbd></li>
            </ul>
            <div class="overflow-x-scroll flex-1 md:w-1/5">
              <div class="flex flex-row min-w-max">
                <img src="../assets/img/blender_tris_quads.png" alt="blender-tris-quads" class="w-80 h-auto object-contain" />
                <img src="../assets/img/obj_menu.png" alt="blender-obj-menu" class="w-80 h-auto object-contain" />
                <img src="../assets/img/blender_global.png" alt="blender-global" class="w-80 h-auto object-contain" />
                <img src="../assets/img/snap_edge_align.png" alt="blender-snap-edge-align" class="w-80 h-auto object-contain" />
              </div>
            </div>
          </div>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">4. Edit Exterior Collision</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Remove the doors. Loop cut if needed</li>
            <li class="pl-4">change the window collision to glass shoot through or bulletproof and set the flags to: e.g. see through or shoot through fx</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">5. Occlusion Edit</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Remove the cubes you don't need usually with the color blue</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">6. Interior Location</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">In object mode, Select the exterior collection</li>
            <li class="pl-4">Enable snap on edges and check Align Rotation To Target</li>
            <li class="pl-4">Add a new plane, press <kbd>Shift + A</kbd> and select mesh -> plane</li>
            <li class="pl-4">Press <kbd>G</kbd> and snap the plane to the door's edge</li>
            <li class="pl-4">Select the object tab (orange square symbol)</li>
            <li class="pl-4">Change the rotation of the X and Y axis to 0</li>
            <li class="pl-4">Change the snap to vertex and disable Align Rotation to Target</li>
            <li class="pl-4">Press <kbd>G</kbd> again to move the plane to the door vertex</li>
            <li class="pl-4">In edit and face mode, Select the door's edge, press global at the top center and click the + button</li>
            <li class="pl-4">In edit and edge mode, change the plane dimension selecting an edge and pressing <kbd>G, X or Y</kbd></li>
            <li class="pl-4">Select all exterior edges, Press <kbd>E Z</kbd> and move the cursor to the roof vertex to create the walls</li>
            <li class="pl-4">Press <kbd>ctrl + R</kbd> to create a loop cut in the wall</li>
            <li class="pl-4">Press <kbd>lmb</kbd> to choose horizontal or vertical cut</li>
            <li class="pl-4">Move the cursor to the vertex and press <kbd>lmb</kbd> (you can scroll to create more loop cuts)</li>
            <li class="pl-4">Press <kbd>X</kbd> -> faces to remove the faces you don't need e.g. doors and windows</li>
            <li class="pl-4">Create doorframes and baseboards</li>
            <li class="pl-4">Press <kbd>Ctrl + J</kbd> to merge them to the shell</li>
            <li class="pl-4">Select and rename UVMap to “UVMap 0”</li>
            <li class="pl-4">Select the inverted green triangle tab</li>
            <li class="pl-4">Add a new color atribute pressing +</li>
            <li class="pl-4">Change “Color” to “Color 1”</li>
            <li class="pl-4">Select Face Corner and Byte Color</li>
            <li class="pl-4">Set RGB Green to .2</li>
            <li class="pl-4">Convert textures to DDS (color, normal and roughness)</li>
            <li class="pl-4">In object mode, select the location layer, in Sollumz panel open Drawables -> Shader Tools -> Create Shader Material -> “Normal Spec”</li>
            <li class="pl-4">In the materials tab scrool down and alter the textures under the Sollumz tab -> Texture Parameters Set Color Space to Non-Color for BumpSampler, DiffuseSample = Color, Bump Sampler = Normal, SpecSample = Roughness</li>
            <li class="pl-4">Duplicate the interior 2x<kbd>Shift + D, rmb</kbd></li>
            <li class="pl-4">Rename the interior from Plane to location</li>
            <li class="pl-4">Rename the 1st copy to «yourname»_«projectname»_shell and the 2nd copy to «yourname»_«projectname»_col</li>
            <li class="pl-4">Select the object tab (orange square symbol) and Align the shell and the collision to the World Origin</li>
            <li class="pl-4">Turn on face orientation (invisible = red, visible = blue), Press <kbd>Alt + N</kbd> -> Flip if you need to flip any face</li>
            <li class="pl-4">Press <kbd>Shift + S</kbd> or <kbd>rmb</kbd> -> Set Origin -> Origin to Geometry</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">7. Interior Shell</summary>
          <li class="pl-4">Convert the shell to a Drawable</li>
          <li class="pl-4">Select shell.model and set all Materials Embbeded</li>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">8. Interior Collision</summary>
          <li class="pl-4">Convert the collision to a Composite</li>
          <li class="pl-4">Select Bound Geometry.BVH and Press <kbd>V</kbd> -> Apply flags preset</li>
          <li class="pl-4">Select col.poly_mesh, remove UVMaps and Color Attributes</li>
          <li class="pl-4">Go to material tab and remove all textures</li>
          <li class="pl-4">Select col.poly_mesh, setup appropriate collision materials in Sollumz -> Collisions -> Create Collision Material</li>
          <li class="pl-4">In Edit Mode, Select faces and Assign to certain collision materials</li>
          <li class="pl-4">Set the floor id of the floor material to the room (1,2,3)</li>
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
            <li class="pl-4">Change the room flags to 96 (Reduce Cars and Reduce Peds) to all rooms including limbo</li>
            <li class="pl-4">Click Portals</li>
            <li class="pl-4">In edit and vertex mode, Select the 4 vertices/corners of the doors and windows</li>
            <li class="pl-4">Click create portal (one portal for each door or window)</li>
            <li class="pl-4">Select Entities</li>
            <li class="pl-4">Select the shell drawable</li>
            <li class="pl-4">Click Add object as entity</li>
            <li class="pl-4">Change the room to limbo and the LOD to 100</li>
            <li class="pl-4">Change the shell flags to 1572864</li>
            <li class="pl-4">Add all the props adding object as entity</li>
            <li class="pl-4">Create entity sets if you want and set all the props you want to the specific entitiy set (e.g. xmas props)</li>
            <li class="pl-4">Set the props to there's specific room (1,2,3)</li>
          </ul>
        </details>
        <details class="space-y-4 px-6">
          <summary class="text-2xl">8. Export</summary>
          <ul class="list-disc list-inside space-y-4">
            <li class="pl-4">Select everything and Press <kbd>V</kbd> -> Export to export everything</li>
          </ul>
        </details>
      </details>
      <details class="space-y-4">
        <summary class="text-2xl">12. Stream folder</summary>
        <ul class="list-disc list-inside space-y-4">
          <li class="pl-4">
            Create the stream folder inside the resources folder
            <p class="pl-8 pt-4">
              Drag all the files from RPF Explorer to the stream folder<br />
              resources/«map_name»/stream/«YDR; YBN; YMAP; YTYP; YMF; YDD; YFT»<br />
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