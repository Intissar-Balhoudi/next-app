import connectMongoDB from "../../libs/mongodb";
import User from "../../models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    connectMongoDB()
    const { user_name, user_email, user_mobile } = await request.json()
    await User.create({ user_name, user_email, user_mobile });
    return NextResponse.json(
        {
            success: true,
            message: "record has been inserted!"
        },
        { status: 201 }
    );
}

export async function GET() {
    connectMongoDB();
    const user = await User.find();
    return NextResponse.json({
        success: true,
        user
    })
}

export async function DELETE(request) {
    connectMongoDB()
    const id = request.nextUrl.searchParams.get('id')
    await User.findByIdAndDelete(id)
    return NextResponse.json(
        {
            success: true,
            message: "record deleted"
        },
        {
            status: 200
        }
    )
}