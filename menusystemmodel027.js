function menusystemmodel027Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,89,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem0.gif",projectroot+"/menusystemmodel027/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",89,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem1.gif",projectroot+"/menusystemmodel027/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",209,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem2.gif",projectroot+"/menusystemmodel027/menusystemitem2_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem5",329,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem3.gif",projectroot+"/menusystemmodel027/menusystemitem3_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",449,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem4.gif",projectroot+"/menusystemmodel027/menusystemitem4_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem7",569,0,120,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem5.gif",projectroot+"/menusystemmodel027/menusystemitem5_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem8",689,0,91,32,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel027/menusystemitem6.gif",projectroot+"/menusystemmodel027/menusystemitem6_over.gif",null);
	var MenuSystemModel027_MNU1 = new LMMenu(mnuname,x+0,y+0,780,32,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel027_MNU1;

	RegisterMainMenu(MenuSystemModel027_MNU1);

	ReIndexMenu(MenuSystemModel027_MNU1, index);

}
