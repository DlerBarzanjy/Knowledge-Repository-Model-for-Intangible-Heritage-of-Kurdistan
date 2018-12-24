function menusystemmodel033Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",0,0,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"ethno-biology.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem0.gif",projectroot+"/menusystemmodel033/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem5",0,30,152,30,0,0,null,0,null,new LMBranch("0",projectroot+"ethno-zoology.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem1.gif",projectroot+"/menusystemmodel033/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",0,59,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"pharmacopoeia.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem2.gif",projectroot+"/menusystemmodel033/menusystemitem2_over.gif",null);
	var MenuSystemModel033_MNU1 = new LMMenu("MenuSystemModel033_MNU1",x+401,y+0,152,90,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel033_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem7",0,0,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"cosmologies.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem3.gif",projectroot+"/menusystemmodel033/menusystemitem3_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem8",0,30,152,31,0,0,null,0,null,new LMBranch("0",projectroot+"languages.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem4.gif",projectroot+"/menusystemmodel033/menusystemitem4_over.gif",null);
	var MenuSystemModel033_MNU2 = new LMMenu("MenuSystemModel033_MNU2",x+401,y+29,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel033_MNU2;

	MenuSystemItems = new Array();
	miindex=0;
	
	var MenuSystemModel033_MNU3 = new LMMenu("MenuSystemModel033_MNU3",x+250,y+0,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel033_MNU3;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,new LMBranch("0",projectroot+"knowledge-and-practices.php"),null,null,projectroot+"/menusystemmodel033/menusystemitem7.gif",projectroot+"/menusystemmodel033/menusystemitem7_over.gif",MenuSystemModel033_MNU3);
	var MenuSystemModel033_MNU4 = new LMMenu(mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel033_MNU4;

	RegisterMainMenu(MenuSystemModel033_MNU4);

	ReIndexMenu(MenuSystemModel033_MNU4, index);

}
