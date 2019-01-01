function menusystemmodel009Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranch("0",projectroot+"admin-login.html"),null,null,projectroot+"/menusystemmodel009/menusystemitem0.gif",projectroot+"/menusystemmodel009/menusystemitem0_over.gif",null);
	var MenuSystemModel009_MNU1 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel009_MNU1;

	RegisterMainMenu(MenuSystemModel009_MNU1);

	ReIndexMenu(MenuSystemModel009_MNU1, index);

}
