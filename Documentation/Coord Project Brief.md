* [**Introduction**](#introduction)

   * [**The Target Audience**](#the-target-audience)

   * [**Community Driven**](#community-driven)

   * [**Key Problem?**](#key-problem)

   * [**Target Platform**](#target-platform)

   * [**Potential Clientele**](#potential-clientele)

   * [**Potential Roadblocks and Issues**](#potential-roadblocks-and-issues)

* [**Requirements**](#requirements)

   * [**Functional Requirements**](#functional-requirements)

   * [**Non-functional Requirements**](#non-functional-requirements)

* [**Project Timeline**](#project-timeline)

* [**Technical Information**](#technical-information)

   * [**Language**](#language)

   * [**Frameworks & Tools**](#frameworks-tools)

   * [**Servers & Hosting**](#servers-hosting)

* [**Branding**](#branding)

* [**Previous Version**](#previous-version)

# **Introduction**

Unfortunately, some addresses are just a little to hard to find, either it's a new build or an obscure address in the middle of the countryside, the idea of this application is to solve these problems by having a database that delivery drivers can use to search for an address and will simply be taken to the door.

There are already a number of applications that attempt to solve this problem, but they do not add any community contributions at all which I believe is a big issue, drivers would like to have some notes on the address beforehand (e.g. issues accessing drive with large van, or perhaps a road leading to the address is completely inaccessible due to tight corners etc) excluding any personal identifiable information, or information specifically tied to a customer as these notes should be kept confidential between the receiver and delivery service.

It would also be better if drivers can comment and/or rate on the address accuracy and provide better coordinates and/or new addresses, there is potential here for _gamifying_ the process to drive contributions.

## **The Target Audience**

The main target of this application is delivery drivers for any company that requires directions to a particular address, while it would be open for public use it will be tailored specifically for delivery drivers and in future would provide paid bespoke access for companies that require more usage.

## **Community Driven**

Most addresses will come from the community itself; drivers can update and add addresses they find so the next time its easier for the next person to find, ideally people who are receiving deliveries could use this application to add their own address pre-emptively to avoid any issues later.

## **Key Problem?**

To put it simply, inhouse geo-location technology is terrible and inaccurate for some companies, for the most part it works fine for addresses in cities and towns, but when you start to venture out into the more rural and remote areas, addresses become even more tricky to find, and often you have no cellular signal so are unable to contact the receiver to get directions.

There are also several government owned databases of addresses which cover the entire UK but are expensive to rent which makes it less attractive to businesses, so they develop their own or rely on Google Maps for information, which again is fine for most places in cities and towns but not for remote addresses.

## **Target Platform**

COORD will begin life as a React application, designed as a PWA (Progressive Web App) which will allow the application to be "Installed" on mobile devices, receive updates, push notifications, store local user data and access more device features than a website can particularly access using service workers, but less than a native app can, this removes a lot of the complexity in developing a native app for iOS or Android but heavily compromises on features, I think for the beginning of life this application will work fine in this case, but in future would benefit from native versions released to the respective devices app stores.

## **Potential Clientele**

I believe that creating a one stop source that anyone can use and contribute too will increase efficiency in any company that uses it, I have already had great success in Tesco in my time as a delivery driver with an older version of the application which is still used extensively to this day. I also had interest from MacRitchie Highland Distribution who I may be able to secure as a client in future to help their business be more efficient.

Its because of this that I think that it's possible in future to secure clients to provide bespoke geo-location services, instead of every company creating their own in-house technology, they can outsource so they can all use the same data and/or applications to locate addresses reducing development, fuel and redelivery costs and increasing efficiency within their business.

## **Potential Roadblocks and Issues**

There may be issues surrounding the overall legality with such an application, the intention is to find and store addresses in a publicly available database, while this has already been done by various companies but we need to be careful where the data comes from, if we get the information from a site which uses Ordnance Survey Address Base data for example, we cannot just find the address on there using a UPRN(Unique Property reference Number) and store the 1:1 data in our own database along with the UPRN, we could potentially omit the UPRN and store the address using our own identifications but this still seems to be a grey area, the best option is to have it be community driven, but will take a very long time to get to a level where lots of people and companies can rely on it, not too mention the accuracy of manually entered data.

There may also be some privacy concerns, while there would be no personally identifiable information allowed, there may be some that slip through, so some moderation will be required, either human or AI to help, there may also be individuals or businesses who do not wish to be listed, this seems unlikely but its something that could potentially happen.

The main concern is the community, if there isn't one then this application would not function, so while there are already a fair number of addresses, we would rely completely on the community to fill in the gaps.

# **Requirements**

Here are some requirements I have managed to come up with off the top of my head, these will be subject to change and will require a team effort to think of other requirements to be added.

## **Functional Requirements**

- Returns a list of addresses based on a search done by a user.
- Allow user registration and login (users will need profiles to add/update addresses or comment)
- Allow users to input new addresses.
- Allow users to update existing addresses and information.
- Operate and display correctly on iOS, Android, Windows and Mac devices.
- Operate and display correctly on the major browsers (Chrome, Firefox, Edge, Opera and Safari)
- Be installable as a Progressive Web Application.
- Open addresses in the users preferred GPS application (Google Maps, Apple Maps, Waze etc)

## **Non-functional Requirements**

- Be accessible, older generations will use this too so we need to think about how we can make it more user friendly.
- Minimalistic, we don't want to bombard the user with too much, keep it minimalistic as possible and only display what is needed.
- Returning search results should be as fast as possible.
- The application should load quickly and not be laggy.
- Should be able to run on older devices.
- Scalable so it can scale to demand and keep a reliable uptime.
- Secure, user data is stored so needs to be secure.

# **Project Timeline**

This is an ongoing real-world project so will be worked on indefinitely, here are some targets for 2023 that I have come up with, they are open to change also and can be discussed further.

**February - March 2023** Initial project setup, repo access, access to files and systems necessary.

**April 2023** MVP prototype with basic functionality, can use hard coded spoof address data to begin with, this will just be to test functionality on various devices.

**May 2023** The same MVP but with the user sections so we can test the functionality and how it should look and function.

**June – August 2023** I'm aware this will be the summer holidays so people can choose to work on the project or not during this time

**September 2023** By this point we would want a database connected so we can search for addresses and retrieve user data and allow login / registration.

**October 2023** We could start to allow beta testers from real world companies to get feedback to review and improve the application

**November 2023 – Onwards** Adding additional features, working with testers, and refining the application.

# **Technical Information**

## **Language**

The frontend application will be written in Typescript, the backend will be a mix of Typescript, JavaScript, SQL and may include Python depending on what we need to achieve.

## **Frameworks & Tools**

The frontend framework will be using React which will be a SSR (Server Side Rendered) application served as a PWA (Progressive Web Application) meaning that portions of the application are rendered on the server before being sent to the client but also contain components that are cached on the client.

The backend will use a mixture of NodeJS, Docker, PostgreSQL, Redis for the bulk of the backend, but authentication will be handled externally via Supabase, Firebase, Auth0 or another appropriate authentication provider we can find.

## **Servers & Hosting**

The application will mostly be built via CI/CD either via Bitbucket or GitLab depending on what is available via Bitbucket and deployed to a private server located in a data centre in London, the database will also be available on this server but will only be accessible via an authenticated tunnel via Cloudflare zero trust to ensure only people who need access have access.

The main domain names for this application is https://coord.uk and https://beta.coord.uk respectively, I may also create one which is for our own testing purposes such as https://dev.coord.uk so we essentially have dev, test and prod for our three environments

# **Branding**

The COORD logo was created a while back and is open to change if it doesn't suit the overall application, but I would like to keep the design similar having the map pin in the middle as the second O, I am no professional designer so we can make changes where needed as the project evolves.

The name COORD also doesn't seem to be associated with any other software, app, or device but the word "COORD" is currently trademarked by google, so there could be issues arising here in the future if they decide to release something with this name.

## **Previous Version**

The previous version of this application is known as OSG2C, which stands for OSG to Coordinates, which took the data from https://osg.scot and translated it to map coordinates, this saved the drivers at Tesco a lot of time cross referencing maps to find an address so was an instant hit, the translations were saved so that is what makes up some of the addresses, but this wasn't good practise so opted for a more manual approach. The old version is still accessible at https://osg2c.uk and will showcase the absolute base functionality required for COORD, a postcode or address entered must return a list of addresses the user can select, as long as we have this, it will be the meat of the project.

Here are some screenshots showing the basic functionality of the older version OSG2C.

![Main Screen](https://cdn.coord.uk/Main_Screen.png)

![Results](https://cdn.coord.uk/Results.png)

![Results Extended](https://cdn.coord.uk/Results_Extended.png)