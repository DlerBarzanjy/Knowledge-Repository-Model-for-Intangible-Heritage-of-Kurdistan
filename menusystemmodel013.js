function menusystemmodel013Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",0,0,152,31,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel013/menusystemitem0.gif",projectroot+"/menusystemmodel013/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,30,152,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel013/menusystemitem1.gif",projectroot+"/menusystemmodel013/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",0,59,152,31,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel013/menusystemitem2.gif",projectroot+"/menusystemmodel013/menusystemitem2_over.gif",null);
	var MenuSystemModel013_MNU1 = new LMMenu("MenuSystemModel013_MNU1",x+250,y+0,152,90,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel013_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel013/menusystemitem3.gif",projectroot+"/menusystemmodel013/menusystemitem3_over.gif",MenuSystemModel013_MNU1);
	var MenuSystemModel013_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel013_MNU2;

	RegisterMainMenu(MenuSystemModel013_MNU2);

	ReIndexMenu(MenuSystemModel013_MNU2, index);

}
