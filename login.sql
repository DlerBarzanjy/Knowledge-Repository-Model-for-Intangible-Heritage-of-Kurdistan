create database test;

use test;

CREATE TABLE `login` (
  `id` int(9) NOT NULL auto_increment,
  `username` varchar(20) collate latin1_general_ci default NULL,
  `password` varchar(32) collate latin1_general_ci default NULL,
  `dtime` varchar(50) collate latin1_general_ci default NULL,
  PRIMARY KEY  (`id`)
)