/*
 Navicat Premium Data Transfer

 Source Server         : mysql@5.7
 Source Server Type    : MySQL
 Source Server Version : 50742 (5.7.42)
 Source Host           : localhost:3306
 Source Schema         : chat

 Target Server Type    : MySQL
 Target Server Version : 50742 (5.7.42)
 File Encoding         : 65001

 Date: 08/06/2023 23:47:09
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(255) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (1, '/upload/avatar.png', 'zhangsan', '123', '2023-06-08 14:06:32');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (2, '/upload/4cd2a3c9-1e4e-4693-aab1-ba46a79bb680.jpg', 'admin', 'admin', '2023-06-08 14:07:21');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
