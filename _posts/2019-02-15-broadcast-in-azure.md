---
layout: post
title: Inter-application messaging in a serverless cloud-based environment.
tags: [Cloud, Azure]
color: rgb(241,89,42)
needs_react: 1
---

Finding real-time communication for (desktop) applications which require instant messaging in serverless cloud solutions. 
<!--more-->

# Introduction
In our company, we use UDP messages to notify our desktop applications about certain events. For example: some client opened record X and we want to make sure other client applications know about this event.

We use [IP4-based UDP broadcasting](https://en.wikipedia.org/wiki/Broadcast_address) to facilitate this, assuming the long-held-old-truth that these typical desktop-based LOB (line of business) applications are served and used on the same network. Although many desktop applications changed to a web-based solution, these desktop application are also taking more and more advantage of cloud-based serverless infrastructure, for example: databases are moved to Azure SQL instances; Documents and other binary data are moved to Blob storage, etc.. Leaving us with the inter application communication as the last puzzle to solve.

# Azure Solutions

What we are looking for is: a serverless cloud-based setup for instant communication and messaging between (desktop) applications.

Let's take a look at some Azure Services:

## Event Hub 

The [Azure Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/) looked promising by name. Simply put: our use case looks a lot of a simple event happening. But this service is meant for high volumes of events/senders and only some processors of these events. As a processor/receiver of events, you need to track down the current position of processing these events yourself, the supporting library's depends on storage to keep track of this position and documentation says it is unwise/unrecommended to build processor which handle an event on a per-event basis.  

## Service Bus

The [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) looked promising. It has this great feature called a `Topic` which comes with the description: "*A broker that can support multiple subscriptions for unidirectional messaging*". The problem with the Topic in Service Bus, regarding our solution, is that all subscriptions are supposed to be known upfront. In our case the number of desktop applications, and even multiple instances per client of it, are not known upfront.  

## SignalR

SignalR is known for it's direct-like communication skills on the web and Azure launched the [Azure SignalR service](https://azure.microsoft.com/en-us/services/signalr-service/) recently. 

This suits our requirements perfectly, but diving deeper, you will notice that the service only takes care of the connections... It still requires some sort of back-end. Fortunately they recommend Azure Functions as a simple backed, making the it a truly serverless solution.

This still required
- a set of Azure Functions to get it serverless
- a library to get it working on desktop applications instead of the web

That's why I created this little side project, to get things started quicker. 
Have a look at it at:

https://github.com/bitfox-git/azurebroadcast-functions
https://github.com/bitfox-git/azurebroadcast-client 

