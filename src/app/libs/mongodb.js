import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        /* mongodb://localhost:27017 */
        /*  mongoose.connect("mongodb+srv://<nom_utilisateur>:<mot_de_passe>@cluster0.mongodb.net/<nom_base_donnees>?retryWrites=true&w=majority", {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         }); */
        mongoose.connect("mongodb+srv://intissarbalhoudi3:Z4wePmQbcMgsCznw@cluster0.ducoq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
            then(() => {
                console.log("database connected 🫡👍")
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;