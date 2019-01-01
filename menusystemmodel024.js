function menusystemmodel024Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel024_MNU1 = new LMMenu("MenuSystemModel024_MNU1",x+250,y+0,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel024_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranch("0",projectroot+"dance_user.php"),null,null,projectroot+"/menusystemmodel024/menusystemitem2.gif",projectroot+"/menusystemmodel024/menusystemitem2_over.gif",MenuSystemModel024_MNU1);
	var MenuSystemModel024_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel024_MNU2;

	RegisterMainMenu(MenuSystemModel024_MNU2);

	ReIndexMenu(MenuSystemModel024_MNU2, index);

}
