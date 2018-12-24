function menusystemmodel028Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranchEx("0","./sounds/goodmorning.mp3",null,0.0,null,null,1,1,1,1,1,1,0,640,480,""),null,null,projectroot+"/menusystemmodel028/menusystemitem0.gif",projectroot+"/menusystemmodel028/menusystemitem0_over.gif",null);
	var MenuSystemModel028_MNU1 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel028_MNU1;

	RegisterMainMenu(MenuSystemModel028_MNU1);

	ReIndexMenu(MenuSystemModel028_MNU1, index);

}
