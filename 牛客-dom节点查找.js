function commonParentNode(oNode1, oNode2) {
    while(oNode1){
        if(oNode1.contains(oNode2)){
            return oNode1
        }else{
            oNode1 = oNode1.parentNode
        }
    }
}