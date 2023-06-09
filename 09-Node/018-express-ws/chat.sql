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

 Date: 10/06/2023 02:45:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` varchar(64) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `messageType` varchar(32) NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of messages
-- ----------------------------
BEGIN;
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('0544cdb7-5433-442c-8f7c-87c39d59cb78', 1, 'zhangsan', 'USER', '2023-06-09 17:57:54');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('163a2780-2886-451b-9444-dcced3465c93', 1, '你是？', 'USER', '2023-06-09 17:58:00');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('181a7251-1ef3-4283-908c-ca2c8421cd5a', 1, '我就是我啊', 'USER', '2023-06-09 18:37:47');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('1bfa0d63-c67e-4268-b0ef-44c475c02186', 1, 'haha', 'USER', '2023-06-09 18:37:26');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('1d91a673-207d-4e1e-bad7-f30e17d19496', 2, '哦哦哦', 'USER', '2023-06-09 17:58:13');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('3233f701-52ca-42b7-bbf2-78c0f65d6df7', 2, 'hello？', 'USER', '2023-06-09 17:57:26');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('412f18fd-dd6b-4b0a-b095-37c86e98919b', 2, 'hellp', 'USER', '2023-06-09 17:57:22');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('539f2865-948a-4e22-a80b-3e8ec102c8fe', 2, '有人吗', 'USER', '2023-06-09 17:57:19');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('5e738d36-195b-49fc-8040-a9cef7d1324e', 1, '我是zhangsna', 'USER', '2023-06-09 17:57:48');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('7cc5ac5a-f297-4b1f-b211-29a5035f8bdd', 1, '哈哈哈', 'USER', '2023-06-09 17:57:44');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('7d2727ca-d22f-4c02-b5c1-fccb7b1a804a', 2, '👋 欢迎[admin]加入群聊~', 'SYSTEM', '2023-06-09 17:57:13');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('7fad11ad-f629-4c70-9327-443cd406b9d8', 1, '有人的有人的', 'USER', '2023-06-09 17:57:42');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('86ed9197-d286-4d7e-b1c0-0ab07c6eb8ba', 2, '叫做admin', 'USER', '2023-06-09 17:58:08');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('87781761-bb5a-42d7-b06b-7ee9544984ec', 2, '是吗', 'USER', '2023-06-09 18:37:52');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('aee1258e-a1ba-44e8-9de1-5b21cbc0160a', 1, '你好', 'USER', '2023-06-09 17:57:45');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('b1c8e602-f762-4458-8341-e6b98a4c4eb4', 1, '👋 欢迎[zhangsan]加入群聊~', 'SYSTEM', '2023-06-09 17:57:28');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('b7dea4e8-4f85-48b8-8128-c65ce5c734dc', 2, 'haha ', 'USER', '2023-06-09 18:35:13');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('c76d12fd-8eba-4987-9113-e90d67278919', 2, '呵呵', 'USER', '2023-06-09 17:58:10');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('cbf8b78f-64f5-482a-8ca6-c7265b4f935c', 2, '我是管理员啊', 'USER', '2023-06-09 17:58:05');
INSERT INTO `messages` (`id`, `user_id`, `message`, `messageType`, `create_time`) VALUES ('d764017c-219b-4b61-95db-32b294675185', 2, '请问你是？', 'USER', '2023-06-09 18:37:41');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_url` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `username` varchar(32) CHARACTER SET utf8 NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 NOT NULL,
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (1, '/upload/avatar.png', 'zhangsan', '123', '2023-06-08 14:06:32');
INSERT INTO `users` (`id`, `avatar_url`, `username`, `password`, `create_time`) VALUES (2, '/upload/4cd2a3c9-1e4e-4693-aab1-ba46a79bb680.jpg', 'admin', 'admin', '2023-06-08 14:07:21');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
