window.onload = loadPagina;

var datos;


function loadPagina(){

    CallService();

}

	
function CallService()
{
  let uriServer = "http://127.0.0.1:5500/setTree.json";

  if (uriServer != "")
  {
      $.ajax({
          url: uriServer,
          type: "get",
          dataType: "json",
          success: OnSuccess,
          error: OnError
      });
  }
  return false;
}

function OnSuccess(data)
{
    datos = data;
    var options = {
        contentKey: 'data',
        width: 1000,
        height: 600,
        nodeWidth: 200,
        nodeHeight: 150,
        fontColor: '#fff',
        borderColor: '#333',
        childrenSpacing: 70,
        siblingSpacing: 50,
        direction: 'top',
        enableExpandCollapse: true,
        nodeTemplate: (content) =>
            `<div style='display: flex;flex-direction: column;gap: 10px;justify-content: center;align-items: center;height: 100%;'>
              <img style='width: 50px;height: 50px;border-radius: 100%;' src='${content.imageURL}' alt='' />
              <div style="text-align: center; font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
              <div style="font-weight: bold; font-family: Arial; font-size: 10px">${content.category}</div>
             </div>`,
        canvasStyle: 'border: 1px solid black;background: #f6f6f6;',

        enableToolbar: false
    };
    const tree = new ApexTree(document.getElementById('svg-tree'), options);
    tree.render(datos);
    
}

function OnError(jqXHR, textStatus, errorThrown)
{
    alert("Mensaje de Error: " + errorThrown);
}

/*
datos = {
    id: 'ms',
    data: {
        imageURL: 'https://i.pravatar.cc/300?img=68',
        name: 'Nombre del Proceso',
        category: 'Nombre de la Persona'
    },
    options: {
        nodeBGColor: '#cdb4db',
        nodeBGColorHover: '#cdb4db'
    },
    children: [
        {
            id: 'mh',
            data: {
                imageURL: 'https://i.pravatar.cc/300?img=69',
                name: 'Nombre del Proceso',
                category: 'Nombre de la Persona'
            },
            options: {
                nodeBGColor: '#ffafcc',
                nodeBGColorHover: '#ffafcc'
            },
            children: [
                {
                    id: 'kb',
                    data: {
                        imageURL: 'https://i.pravatar.cc/300?img=65',
                        name: 'Nombre del Proceso',
                        category: 'Nombre de la Persona'
                    },
                    options: {
                        nodeBGColor: '#f8ad9d',
                        nodeBGColorHover: '#f8ad9d'
                    }
                },
                {
                    id: 'cr',
                    data: {
                        imageURL: 'https://i.pravatar.cc/300?img=67',
                        name: 'Nombre del Proceso',
                        category: 'Nombre de la Persona'
                    },
                    options: {
                        nodeBGColor: '#c9cba3',
                        nodeBGColorHover: '#c9cba3'
                    }
                }
            ]
        },
        {
            id: 'cs',
            data: {
                imageURL: 'https://i.pravatar.cc/300?img=59',
                name: 'Nombre del Proceso',
                category: 'Nombre de la Persona'
            },
            options: {
                nodeBGColor: '#00afb9',
                nodeBGColorHover: '#00afb9'
            },
            children: [
                {
                    id: 'Noah_Chandler',
                    data: {
                        imageURL: 'https://i.pravatar.cc/300?img=57',
                        name: 'Nombre del Proceso',
                        category: 'Nombre de la Persona'
                    },
                    options: {
                        nodeBGColor: '#84a59d',
                        nodeBGColorHover: '#84a59d'
                    }
                },
                {
                    id: 'Felix_Wagner',
                    data: {
                        imageURL: 'https://i.pravatar.cc/300?img=52',
                        name: 'Nombre del Proceso',
                        category: 'Nombre de la Persona'
                    },
                    options: {
                        nodeBGColor: '#0081a7',
                        nodeBGColorHover: '#0081a7'
                    }
                }
            ]
        }
    ]
};
var options = {
    contentKey: 'data',
    width: 800,
    height: 600,
    nodeWidth: 150,
    nodeHeight: 125,
    fontColor: '#fff',
    borderColor: '#333',
    childrenSpacing: 50,
    siblingSpacing: 20,
    direction: 'top',
    enableExpandCollapse: true,
    nodeTemplate: (content) =>
        `<div style='display: flex;flex-direction: column;gap: 10px;justify-content: center;align-items: center;height: 100%;'>
          <img style='width: 50px;height: 50px;border-radius: 100%;' src='${content.imageURL}' alt='' />
          <div style="font-weight: bold; font-family: Arial; font-size: 14px">${content.name}</div>
          <div style="font-weight: bold; font-family: Arial; font-size: 10px">${content.category}</div>
         </div>`,
    canvasStyle: 'border: 1px solid black;background: #f6f6f6;',
    enableToolbar: true,
};
const tree = new ApexTree(document.getElementById('svg-tree'), options);
tree.render(datos);
*/
