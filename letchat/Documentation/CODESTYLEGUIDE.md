Code style guide

Components

         - Components: fat arrow style, default export beneath

         - One component per file (unless small & stateless)
         - Component folder and function names should be PascalCase & the same!
         - index.tsx for each component file
         - index.test.tsx for each component test file
         - Tests in same folder as component, every component has render test before it's made
         - Always self-close tags that have no children:
           <DropDown /> instead of <DropDown></DropDown>
         - Use ID names to help easily identify sections of a component

Props

         - camelCase for prop names

Styling

         - All CSS files in styles folder

Accessibility

         - Always include alt tags on images

Commenting

         - At least briefly comment each function

Commit messages

         - Include mention of every change
