function menusystemmodel032Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel032_MNU1 = new LMMenu("MenuSystemModel032_MNU1",x+250,y+0,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel032_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranch("0",projectroot+"social-practices-26-festive-events.php"),null,null,projectroot+"/menusystemmodel032/menusystemitem2.gif",projectroot+"/menusystemmodel032/menusystemitem2_over.gif",MenuSystemModel032_MNU1);
	var MenuSystemModel032_MNU2 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel032_MNU2;

	RegisterMainMenu(MenuSystemModel032_MNU2);

	ReIndexMenu(MenuSystemModel032_MNU2, index);

}
