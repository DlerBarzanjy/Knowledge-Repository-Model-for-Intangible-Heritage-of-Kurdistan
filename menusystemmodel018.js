function menusystemmodel018Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",0,0,152,31,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel018/menusystemitem0.gif",projectroot+"/menusystemmodel018/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,30,152,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel018/menusystemitem1.gif",projectroot+"/menusystemmodel018/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",0,59,152,31,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel018/menusystemitem2.gif",projectroot+"/menusystemmodel018/menusystemitem2_over.gif",null);
	var MenuSystemModel018_MNU1 = new LMMenu("MenuSystemModel018_MNU1",x+250,y+0,152,90,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel018_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel018/menusystemitem3.gif",projectroot+"/menusystemmodel018/menusystemitem3_over.gif",MenuSystemModel018_MNU1);
	var MenuSystemModel018_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel018_MNU2;

	RegisterMainMenu(MenuSystemModel018_MNU2);

	ReIndexMenu(MenuSystemModel018_MNU2, index);

}
