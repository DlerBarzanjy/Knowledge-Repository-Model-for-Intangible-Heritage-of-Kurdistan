function menumodel001Show(x, y, mnuname) {
	z_index++;
	var MenuItems = null;
	var miindex= 0;
	var index= z_index;

	MenuItems = new Array();
	miindex=0;
	MenuItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,39,26,0,0,null,0,null,null,null,null,projectroot+"/menumodel001/menuitem0.gif",projectroot+"/menumodel001/menuitem0_over.gif",null);
	MenuItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",0,26,39,25,0,0,null,0,null,null,null,null,projectroot+"/menumodel001/menuitem1.gif",projectroot+"/menumodel001/menuitem1_over.gif",null);
	MenuItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,51,39,26,0,0,null,0,null,null,null,null,projectroot+"/menumodel001/menuitem2.gif",projectroot+"/menumodel001/menuitem2_over.gif",null);
	var MenuModel001_MNU1 = new LMMenu(mnuname,x+0,y+0,39,77,1,0,null,0,null,MenuItems,1);
	LMObjects[objindex++]= MenuModel001_MNU1;

	RegisterMainMenu(MenuModel001_MNU1);

	ReIndexMenu(MenuModel001_MNU1, index);

}
