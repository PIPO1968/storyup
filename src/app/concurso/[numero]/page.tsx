"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { renderNick } from "@/utils/renderNick";

export default function DetalleConcurso() {
    const [concurso, setConcurso] = useState<any>(null);
    const params = useParams();
    const numero = params?.numero;

    useEffect(() => {
        if (typeof window !== "undefined" && numero) {
            const concursosStr = localStorage.getItem("concursos");
            const concursosArr = concursosStr ? JSON.parse(concursosStr) : [];
            const encontrado = concursosArr.find((c: any) => String(c.numero) === String(numero));
            setConcurso(encontrado || null);
        }
    }, [numero]);

    if (!concurso) {
        return <div className="min-h-screen flex items-center justify-center text-xl text-red-600">Concurso no encontrado</div>;
    }

    return (
        <div className="min-h-screen bg-white p-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Detalle del Concurso Nº {concurso.numero}</h1>
            <div className="max-w-xl mx-auto bg-green-100 rounded-lg shadow-md p-6">
                <p><strong>Título:</strong> {concurso.titulo}</p>
                <p><strong>Detalle:</strong> {concurso.detalle}</p>
                <p><strong>Autor:</strong> {renderNick(concurso.autor)}</p>
                <p><strong>Inicio:</strong> {concurso.inicio}</p>
                <p><strong>Fin:</strong> {concurso.fin}</p>
                <p><strong>Premio en likes:</strong> 10</p>
            </div>
        </div>
    );
}
