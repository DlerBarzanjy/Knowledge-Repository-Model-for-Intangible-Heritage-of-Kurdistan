function menusystemmodel021Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",0,0,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"instruments_user.php"),null,null,projectroot+"/menusystemmodel021/menusystemitem0.gif",projectroot+"/menusystemmodel021/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,30,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"cultural-spaces_user.php"),null,null,projectroot+"/menusystemmodel021/menusystemitem1.gif",projectroot+"/menusystemmodel021/menusystemitem1_over.gif",null);
	var MenuSystemModel021_MNU1 = new LMMenu("MenuSystemModel021_MNU1",x+250,y+0,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel021_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel021_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel021_MNU2;

	RegisterMainMenu(MenuSystemModel021_MNU2);

	ReIndexMenu(MenuSystemModel021_MNU2, index);

}
