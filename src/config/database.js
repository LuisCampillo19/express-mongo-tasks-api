import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // 1. OBLIGAMOS A VERCEL A MOSTRAR QUÉ TIENE LA VARIABLE (Ocultando la clave)
        const uri = process.env.MONGODB_URI;
        
        if (!uri) {
            console.error("❌ ERROR CRÍTICO: La variable MONGODB_URI está INDEFINIDA (Vercel no la detecta)");
            return;
        }

        // Muestra los primeros 15 caracteres para ver si empieza por 'mongodb+srv://'
        console.log("🔍 Vercel está intentando conectar a:", uri.substring(0, 20) + "...");

        await mongoose.connect(uri);
        console.log('✅ DATABASE MONGO CONNECTED');
    } catch (err) {
        // 2. IMPRIMIMOS EL ERROR REAL SIN MATAR EL PROCESO
        console.error('❌ Error connecting to DB:', err.message);
        // process.exit(1); <--- COMENTAMOS ESTO PARA QUE NO SE REINICIE EL SERVIDOR
    }
};