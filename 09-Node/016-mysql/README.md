# MySQL on MacOS

## Installation

安装 mysql 使用的是 brew 来进行安装的，如果没有安装请先安装好

**1. 查询安装的 mysql**

> brew search mysql

![](./static/search.png)

**2. 安装mysql@5.7**

> brew install mysql@5.7

![](https://img-blog.csdnimg.cn/img_convert/0717e56e6a1ee7c3a963dbcc612d27a9.png)

**3. 设置环境变量**

以 zsh 为例

> echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc

然后

> source ~/.zshrc

**4. 初始化配置**

安装完成后需要执行一次配置才能够正常使用，执行如下命令：

> mysql_secure_installation

- 是否开启密码校验插件

  ![](https://img-blog.csdnimg.cn/img_convert/c6e3337e553daaa59f23d4d569ed7193.png)

  如果是个人使用，这里可以`不开启密码校验插件`，这样我们可以使用较为简单的密码组合，方便记忆，因此输入**n**。

- 设置root用户密码

  ![](https://img-blog.csdnimg.cn/img_convert/52fdd580745940d2210444e279eb5ca1.png)

  为数据库的root用户（最高权限用户）设置密码，需要输入两次，输入时没有光标显示，是正常的。

- 选择是否移除用户

  ![](https://img-blog.csdnimg.cn/img_convert/736099a65bec4218b70506bdfbda0112.png)

  这一步可以将不需要的匿名用户移除，输入y回车即可。

- 开启root用户远程连接

  ![](https://img-blog.csdnimg.cn/img_convert/37609b0ad6eb33db675b4705f243b447.png)

  默认给出的选项是不允许通过root用户远程连接，因为root用户拥有最高权限，学习阶段可以开启方便虚拟机或局域网调试（如果开启需要输入n）。

- 选择是否保留测试数据集

  ![](https://img-blog.csdnimg.cn/img_convert/165f55e226543d4eb323e463881290f4.png)

  安装是默认附带一个test数据集，这里可以根据需要选择是否保留（如果需要移除则输入y）。

- 立即刷新权限

  ![](https://img-blog.csdnimg.cn/img_convert/56bb53a8824939e121b24f8d900f2542.png)

  输入y使得密码和权限设置立即生效，否则需要重新启动数据库服务。

**5. 测试登录**

使用刚刚设置的密码测试登陆：

> mysql -uroot -p

![](https://img-blog.csdnimg.cn/img_convert/7b67a8a112356f76cf2f15b802b009b1.png)

也可以在命令中使用明文密码直接登陆，如（密码为root）：

> mysql -uroot -proot

## Navicat

- 以Navicat为例，首先新建一个连接：

  ![](https://img-blog.csdnimg.cn/img_convert/4544803ab9b1459b5a298be73da121e4.png)

- 填写连接名和密码创建一个新的连接：

  ![](https://img-blog.csdnimg.cn/img_convert/6ba22de788f8127651f3c5b9567d1111.png)