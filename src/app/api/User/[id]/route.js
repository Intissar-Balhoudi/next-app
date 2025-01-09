
import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/User";


import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    console.log("id...................")
    console.log(id)
    connectMongoDB();
    const { user_name, user_email, user_mobile } = await request.json()
    await User.findByIdAndUpdate(id, {
        user_name, user_email, user_mobile
    })
    return NextResponse.json(
        {
            success: true,
            message: "record has been updated!"
        },
        {
            status: 200
        }
    )
}

export async function GET(_, { params }) {
    const { id } = params;
    connectMongoDB();
    const user = await User.findById(id)
    return NextResponse.json(
        {
            success: true,
            user
        },
        {
            status: 200
        }
    )
}