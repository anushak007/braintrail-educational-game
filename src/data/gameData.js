export const snakes={99:78,95:75,88:68,64:60,47:26,36:6,18:3};
export const ladders={4:14,9:31,20:38,28:46,40:59,63:81,71:91};
export const questionSquares=new Set([5,11,16,23,29,34,42,49,55,61,68,74,80,86,93,97]);
export const questions=[
{category:"Math",question:"What is 15% of 200?",options:["20","25","30","35"],answer:2,hint:"Convert 15% to 0.15 and multiply by 200.",explanation:"0.15 × 200 = 30."},
{category:"Science",question:"Which planet is known as the Red Planet?",options:["Venus","Mars","Jupiter","Mercury"],answer:1,hint:"It is the fourth planet from the Sun.",explanation:"Mars looks reddish because of iron-rich minerals on its surface."},
{category:"Computers",question:"What does CPU stand for?",options:["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing User"],answer:0,hint:"It is often called the brain of a computer.",explanation:"CPU stands for Central Processing Unit."},
{category:"English",question:"Choose the correct plural of 'child'.",options:["Childs","Childes","Children","Childrens"],answer:2,hint:"It is an irregular plural.",explanation:"Children is the plural form of child."},
{category:"Math",question:"What is the square root of 144?",options:["10","11","12","14"],answer:2,hint:"What number multiplied by itself gives 144?",explanation:"12 × 12 = 144."},
{category:"Science",question:"What gas do plants absorb during photosynthesis?",options:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],answer:1,hint:"Humans breathe this gas out.",explanation:"Plants absorb carbon dioxide during photosynthesis."},
{category:"Computers",question:"Which is an input device?",options:["Monitor","Printer","Speaker","Keyboard"],answer:3,hint:"You use it to type.",explanation:"A keyboard sends data into a computer."},
{category:"General",question:"How many sides does a hexagon have?",options:["Five","Six","Seven","Eight"],answer:1,hint:"The prefix hexa means six.",explanation:"A hexagon has six sides."},
{category:"Math",question:"A ₹500 shirt has a 10% discount. What is the sale price?",options:["₹400","₹425","₹450","₹490"],answer:2,hint:"Find 10% of 500 and subtract it.",explanation:"10% of ₹500 is ₹50, so the price is ₹450."},
{category:"Computers",question:"Which language structures web pages?",options:["HTML","Python","SQL","C"],answer:0,hint:"It stands for HyperText Markup Language.",explanation:"HTML defines the structure and content of web pages."},
{category:"Science",question:"At standard pressure, water boils at what temperature?",options:["50°C","75°C","100°C","150°C"],answer:2,hint:"Think of one hundred degrees.",explanation:"Water boils at 100°C at standard atmospheric pressure."},
{category:"General",question:"Which is the largest ocean?",options:["Atlantic","Indian","Arctic","Pacific"],answer:3,hint:"It lies between Asia/Australia and the Americas.",explanation:"The Pacific is Earth's largest ocean."}
];
export const rewards=[
{title:"Brilliant Bonus!",description:"Move ahead 3 extra squares.",move:3},
{title:"Lucky Leap!",description:"Advance 2 extra squares.",move:2},
{title:"Knowledge Power!",description:"Your correct answer earns 5 squares.",move:5},
{title:"Steady Progress!",description:"Move ahead 1 extra square.",move:1}
];
export const penalties=[
{title:"Try Again!",description:"Move back 2 squares. Every mistake is a lesson.",move:-2},
{title:"Brain Buffer!",description:"Move back 3 squares and prepare for the next question.",move:-3},
{title:"Learning Detour!",description:"Move back 1 square. You'll get the next one!",move:-1},
{title:"Challenge Accepted!",description:"Move back 4 squares. Keep going!",move:-4}
];