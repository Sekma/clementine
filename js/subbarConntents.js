  // importer data Json
  let content ={};
  
  async function loadTranslations() {
      const response = await fetch('js/subbarContents.json');
      content = await response.json();
  }

  //function de affichage des details
  document.addEventListener('DOMContentLoaded', async () => {
      await loadTranslations();
  });
  function showDescription(subbar_item){
      const nodeList = document.querySelectorAll('.'+subbar_item+'-subbar-item');

      for (let i = 0; i < nodeList.length; i++) {
        /* subbar-Down */
          nodeList[i].onmouseover=function(){
            /* subbar_item hover */
              document.getElementById(subbar_item+'_subbar_description').innerHTML = "<div id=\"subbar_extention\">" + content[subbar_item][subbar_item+'-subbar-item-'+i] + "</div>" ;
              document.getElementById(subbar_item+'_subbar_description').classList.remove('subbar-up');
              document.getElementById(subbar_item+'_subbar_description').classList.add('subbar-down');
              $("nav").css("background-color", "rgb(255, 255, 255)");
            };
           nodeList[i].onmouseleave=function(){
            document.getElementById(subbar_item+'_subbar_description').classList.remove('subbar-down');
            document.getElementById(subbar_item+'_subbar_description').classList.add('subbar-up');
            $("nav").css("background-color", "rgba(255, 255, 255, 0.5)");
            }; 

        }; 
        document.getElementById(subbar_item+'_subbar_description').onmouseover=function(){
              document.getElementById(subbar_item+'_subbar_description').classList.remove('subbar-up');
              document.getElementById(subbar_item+'_subbar_description').classList.add('subbar-down');
              $("nav").css("background-color", "rgb(255, 255, 255)");
            };   
        document.getElementById(subbar_item+'_subbar_description').onmouseleave=function(){
              document.getElementById(subbar_item+'_subbar_description').classList.remove('subbar-down');
              document.getElementById(subbar_item+'_subbar_description').classList.add('subbar-up');
              $("nav").css("background-color", "rgba(255, 255, 255, 0.5)");
            }; 
      

  };

  showDescription("project");
  showDescription("service");