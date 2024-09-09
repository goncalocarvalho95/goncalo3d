<template>
    <div id="shortcuts" class="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg p-8">
        <details class="col-span-3 space-y-4">
            <summary class="text-2xl">Blender Shortcuts</summary>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <ul class="list-none list-inside space-y-2">
                    <li class="pl-4"><kbd>Numpad .</kbd> Zoom to selection</li>
                    <li class="pl-4"><kbd>A</kbd> Select All</li>
                    <li class="pl-4"><kbd>E (X or Y or Z)</kbd> Extrude</li>
                    <li class="pl-4"><kbd>F</kbd> Fill - Create Face</li>
                    <li class="pl-4"><kbd>G (X or Y or Z) or (Shift + X or Y or Z)</kbd> Move</li>
                    <li class="pl-4"><kbd>H</kbd> Hide</li>
                    <li class="pl-4"><kbd>I</kbd> Inset Face</li>
                    <li class="pl-4"><kbd>J</kbd> Join vertices</li>
                    <li class="pl-4"><kbd>K</kbd> Knife tool</li>
                    <li class="pl-4"><kbd>L</kbd> Select Linked Vertices</li>
                    <li class="pl-4"><kbd>Shift + L</kbd> Deselect Linked Vertices</li>
                    <li class="pl-4"><kbd>M</kbd> Merge</li>
                    <li class="pl-4"><kbd>N</kbd> Show Side Menu (Sollumz panel)</li>
                    <li class="pl-4"><kbd>O</kbd> Enable Proportional Editing - Edit mode</li>
                    <li class="pl-4"><kbd>P</kbd> Separate -> Selection</li>
                    <li class="pl-4"><kbd>R</kbd> Rotate</li>
                    <li class="pl-4"><kbd>S</kbd> Scale</li>
                    <li class="pl-4"><kbd>T</kbd> Hide toolbar</li>
                    <li class="pl-4"><kbd>U</kbd> UV Mapping - Unwrap Mesh</li>
                    <li class="pl-4"><kbd>X</kbd> Delete</li>
                </ul>

                <ul class="list-none list-inside space-y-2">
                    <li class="pl-4"><kbd>F2</kbd> Rename</li>
                    <li class="pl-4"><kbd>F3</kbd> Menu Search</li>
                    <li class="pl-4"><kbd>F11</kbd> View Image</li>
                    <li class="pl-4"><kbd>F12</kbd> Render Image</li>
                    <li class="pl-4"><kbd>Tab</kbd> Switch Between Edit Mode and Object Mode</li>
                    <li class="pl-4"><kbd>1</kbd> Vertex Mode</li>
                    <li class="pl-4"><kbd>2</kbd> Edge Mode</li>
                    <li class="pl-4"><kbd>3</kbd> Face Mode</li>
                    <li class="pl-4"><kbd>Alt + A</kbd> Machin3tools Move to Origin Menu</li>
                    <li class="pl-4"><kbd>Alt + J</kbd> Tris to Quads</li>
                    <li class="pl-4"><kbd>Alt + P</kbd> Clear Parent (Keep Transformation)</li>
                    <li class="pl-4"><kbd>Alt + Space</kbd> Fullscreen</li>
                    <li class="pl-4"><kbd>Ctrl + A</kbd> Apply Transformation</li>
                    <li class="pl-4"><kbd>Ctrl + B</kbd> Bevel</li>
                    <li class="pl-4"><kbd>Ctrl + C</kbd> Copy</li>
                    <li class="pl-4"><kbd>Ctrl + J</kbd> Join all objects to the last one</li>
                    <li class="pl-4"><kbd>Ctrl + N</kbd> New File</li>
                    <li class="pl-4"><kbd>Ctrl + O</kbd> Open File</li>
                    <li class="pl-4"><kbd>Ctrl + Q</kbd> Quit Blender</li>
                    <li class="pl-4"><kbd>Ctrl + R</kbd> Loop Cut and Slide</li>
                </ul>

                <ul class="list-none list-inside space-y-2">
                    <li class="pl-4"><kbd>Ctrl + S</kbd> Save File</li>
                    <li class="pl-4"><kbd>Ctrl + Shift + S</kbd> Save File As</li>
                    <li class="pl-4"><kbd>Ctrl + V</kbd> Paste</li>
                    <li class="pl-4"><kbd>Ctrl + Q</kbd>Quit Blender</li>
                    <li class="pl-4"><kbd>Ctrl + Y</kbd>Redo</li>
                    <li class="pl-4"><kbd>Ctrl + Z</kbd>Undo</li>
                    <li class="pl-4"><kbd>Shift + V or GG</kbd>Slide</li>
                    <li class="pl-4"><kbd>Shift + A</kbd> Create Object</li>
                    <li class="pl-4"><kbd>Shift + B</kbd> Zoom to that location</li>
                    <li class="pl-4"><kbd>Shift + D</kbd> Duplicate</li>
                    <li class="pl-4"><kbd>Shift + R</kbd> Repeats Last Action</li>
                    <li class="pl-4"><kbd>Shift + S</kbd> Cursor/Object Origin</li>
                    <li class="pl-4"><kbd>Alt + N</kbd> Normals (Flip Faces)</li>
                    <li class="pl-4"><kbd>Ctrl + F12</kbd> Render Animation</li>
                    <li class="pl-4"><kbd>Ctrl + F11</kbd> View Animation</li>
                    <li class="pl-4"><kbd>Ctrl + Page Down</kbd> Next Workspace</li>
                    <li class="pl-4"><kbd>Ctrl + Page Up</kbd> Previous Workspace</li>
                    <li class="pl-4"><kbd>MMB</kbd> Rotate View - drag</li>
                    <li class="pl-4"><kbd>Shift + MMB</kbd> Pan View</li>
                    <li class="pl-4"><kbd>Mouse Scroll Wheel</kbd> Zoom View</li>
                </ul>
            </div>
        </details>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
