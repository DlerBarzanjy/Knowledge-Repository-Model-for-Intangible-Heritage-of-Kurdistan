function menusystemmodel020Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel020_MNU1 = new LMMenu("MenuSystemModel020_MNU1",x+250,y+0,152,90,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel020_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,null,null,null,projectroot+"/menusystemmodel020/menusystemitem3.gif",projectroot+"/menusystemmodel020/menusystemitem3_over.gif",MenuSystemModel020_MNU1);
	var MenuSystemModel020_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel020_MNU2;

	RegisterMainMenu(MenuSystemModel020_MNU2);

	ReIndexMenu(MenuSystemModel020_MNU2, index);

}
