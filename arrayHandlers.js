// JavaScript Document


function populateDropdown(){ 
    // Get reference to dropdown (mySizeList)
    var mySizeList = document.getElementById("mySizeList");
    //create empty option
    var option = document.createElement("option");
    mySizeList.add(option);
    // Loop through sizeList array and create option for each size
    for(var size in sizeList){
        // Create option for each size in array
        option = document.createElement("option");
        option.value= size;
        option.text= size;
        option.innerHTML = size; // whatever property it has
        // then append it to the select element
        mySizeList.add(option);
     }
}
function getSizeData(){
    var mySizeList =document.getElementById("mySizeList");
    var keyName = mySizeList.options[mySizeList.selectedIndex].text;
    if(keyName in sizeList){
        
        buildSizeInfo(sizeList[keyName]);
        }//end of keyName Condition
}//end of getSizeData

function buildSizeInfo(sizeInfoArray){
    
    var element = document.getElementById("sizes");
    element.innerHTML="";
    
    // Iterate through sizeInfoArray
    for(var sizes in sizeInfoArray){
        
        var para;
        var node;
        
        // Create a paragraph node and update it with the ID of the song
    	for(var key in sizeInfoArray[sizes]){
            
                para = document.createElement("p");
                node = document.createTextNode(key);
             
                //var element = document.getElementById("sizes");
                element.appendChild(para);
    	
            for(var item in sizeInfoArray[sizes][key]){

                    para = document.createElement("p");
                    node = document.createTextNode(item + " : " + sizeInfoArray[sizes][key][item]);
                    para.appendChild(node);
                  
                    element = document.getElementById("sizes");
                    element.appendChild(para);
            }  
        }        
    }//end of sizeInfoArray loop  
}//end of buildSizeInfo

function handler(eventInfo) { /* Your code */ }
 
// addEventListener syntax
rating.addEventListener("change", handler);
rating.removeEventListener("change", handler);
