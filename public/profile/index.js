const content = `
<img alt="mhkim_profile" src="https://drive.google.com/uc?export=view&id=1gwNwZOXMzAC9sGDEYB7q6GI3CcvJVH_4" width="300px"/>

🏠 Seoul, South Korea
📧 yahma25@gmail.com
<a target="_blank" href="https://github.com/yahma25"><img alt="github" src="https://camo.githubusercontent.com/4133dc1cd4511d4a292b84ce10e52e4ed92569fb2a8165381c9c47be5edc2796/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67" width="30px"/></a> <a target="_blank" href="https://www.linkedin.com/in/yahma25"><img alt="linkein" src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667" width="30px"/></a>

# MyoungHo Kim (Front-end Developer)

I have been working as a developer for +4 years.
* Front-end +3 years
* Windows programming +1 year

In the past, I had worked as a game designer who designs a game system and a game concept for 4 years.

# Skill
### Commercial experience
* HTML
* CSS/SASS(SCSS)
* JavaScript
* TypeScript
* React
* Delphi

### Self studying
* Webpack
* Node.js
* AWS

# Experience
### MIRIDIH | Seoul, Korea | 2016.11 - present
* SPA Editor service, Junior Front-end developer, 3+ years
* Windows Editor service, Junior Software developer, 1 year

### GamesLab | Seoul, Korea | 2012.1 - 2016.1
* Online/Mobile game service, Junior Game designer, 4 years

# Project
### Printing service | 2019.11 - present
* Developed printing features(ex. Page mask, Pre-flight) that need for over 15 products while managing teammates' issues as the main developer.
* Collaborated with the product order service team, made the first revenue by linking two services where users can design on their own in the design editor and order their designs. ($1,600,000 a month)

### SPA Editor service | 2018.01 - 2019.10
* Joined SPA service team based on Typescript, developed a few core features(ex. photo crop, background library, design download) of the editor that users can design on their own.
* Contributed to become the service that has users over 600k and to rank in a higher list in the design editor service industry in Korea.

### Windows Editor service maintanence | 2016.11 - 2017.12
* Solved many errors and technical debt that was accumulated in the editor base on Delphi.
    * Collected the error logs (EurekaLog) with implementing the error log parser (EurekaLog Parse) in person
    * Inserted content parsed in a database
    * Created issues for the errors by analyzing the call stacks
    * Shared to my teammates and solved the errors in person
* Achieved to reduce the maximum error rate by 9.06% → 1.70% based on an average of 280k executions per month.

# Education
* M.A. Media. Soongsil University Graduate School of Information Science, Korea 2014
* BS. Computer Science. National Institute for Lifelong Education, Korea 2008
`;

new toastui.Editor({
  el: document.querySelector('#viewer'),
  initialValue: content
});
