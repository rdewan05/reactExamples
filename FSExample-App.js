import React, { useState } from 'react';
import ChildComponent from './Child';


export default function App() {
  const [FolderObject, setFolderObject] = useState({});

  const list = [
    {
      id: "Folder",
      name: "src/",
      children: [
        {
          id: "file",
          name: "App.js"
        },
        {
          id: "Folder",
          name: "srcChild/",
          children: [
            {
              id: "file",
              name: "App2.js"
            },{
              id: "Folder",
              name: "srcChild2/",
              children: [],
            }
          ],
        }
      ],
    },
    {
      id: "file",
      name: "Package.json"
    }
  ];

  let handleFolderObject = (obj) => {
    return obj.children && obj.children.length !== 0 ? obj.children.map(item => handleFolderObject(item)) : (<ChildComponent name={obj.name} />)
  }


  return (
    <div className="App">
      {list.map((item) => (
        <div>
          <div key={item.id}>{item.name}</div>
          {
            item.id === 'Folder' ? handleFolderObject(item) : null
          }
          {/* {item.id === 'Folder' ? (<ChildComponent children={item.children} folderObjectHandler = {handleFolderObject}/>): null} */}

        </div>
      ))}
    </div>
  );
}
