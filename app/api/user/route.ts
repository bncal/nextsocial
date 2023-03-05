import prisma from 'prisma/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';



export async function POST(req: NextResponse) {
    
    const uData = await req.json();

    const user = await prisma.user.create({
        data: {
            username: uData.username,
            email: uData.email,
            password: uData.password,
        },
    });

    if(!user)
        return NextResponse.json({ message: "There is already an user registered with this username" }, { status: 400 });

    return NextResponse.json({status: 200});
}

// export async function POST (request: NextRequest ) {

//     const { username, email, password } = request.body;
//     // const hashedPassword = bcrypt.hash(password, 10);
//     console.log();
//     // const { username, email, password } = request.body as ICreateUserArgs;

//     const user = await prisma.user.create({
//         data: {
//             username: username,
//             email: email,
//             password: password,

//             isBanned: false,
//             isOfficial: false,
//             isModerator: false,
//             fname: "",
//         }
//     });

//     return NextResponse.json(user);
// }
