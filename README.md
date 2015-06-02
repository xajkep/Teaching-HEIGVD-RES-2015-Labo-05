# RES: Web Infrastructure Lab

### Objectives

The main goal of this lab is to learn **how to setup a web infrastructure** and to become familiar with the role of several components (http servers, reverse proxies, load balancers). 

This will be done in a **virtualized environment** based on VirtualBox, Vagrant and Docker. By now, you should already be familiar with these tools, but in the context of the lab you will discover a couple of new features and techniques (e.g. how to share data between containers with volumes).

In addition, in this lab we will come back to the notion of **dynamic service discovery**, which have described in the context of **UDP**. One objective of the lab will be do design a service discovery protocol, which will be used to **be aware of HTTP servers appearing or disappearing from the infrastructure**. In reaction to these events, the **load balancer** should be automatically reconfigured.

### Auteurs
Valentin Schaad
Amine Tayaa
Sébastien Henneberger
Benoît Zuckschwerdt

### Contributions
Valentin Schaad, Benoît Zuckschwerdt:
Implémentation du Front-end et du back-end.

Amine Tayaa, Sébastien Henneberger:
Implémentation du serveur Apache reverse proxy + load-balancer.

###Rapport
Le rapport se nomme Lab05_WEB_Infrastructure.pdf