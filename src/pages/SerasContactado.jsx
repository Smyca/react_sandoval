import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, Home } from 'lucide-react';
import Navbar from '../components/Navbar';

const SerasContactado = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(20);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4">
                <div className="max-w-2xl w-full text-center">
                    {/* Ícono de éxito */}
                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-500/20 mb-8 animate-pulse border border-green-300">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        ¡Gracias por contactarnos!
                    </h1>

                    {/* Mensaje de agradecimiento */}
                    <div className="bg-white/80 backdrop-blur-md rounded-lg p-8 mb-8 border border-blue-200 shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Tu solicitud ha sido enviada exitosamente
                        </h2>
                        
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Agradecemos profundamente tu confianza en nuestros servicios. Tu tiempo es valioso 
                            y el hecho de que hayas elegido compartirlo con nosotros significa mucho para nuestro equipo.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                                <h3 className="text-blue-800 font-semibold mb-2">📧 Próximos pasos:</h3>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Revisaremos tu solicitud detalladamente</li>
                                    <li>• Prepararemos una propuesta personalizada</li>
                                    <li>• Te contactaremos dentro de 24 horas</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                                <h3 className="text-green-800 font-semibold mb-2">⏰ Tiempo de respuesta:</h3>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Confirmación: Inmediata</li>
                                    <li>• Contacto inicial: 2-6 horas</li>
                                    <li>• Propuesta completa: 24-48 horas</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Contador de redirección */}
                    <div className="bg-orange-50/90 backdrop-blur-md rounded-lg p-6 mb-6 border border-orange-200 shadow-md">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <Clock className="h-5 w-5 text-orange-600" />
                            <span className="text-orange-700 font-medium">
                                Redirección automática en:
                            </span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl font-bold text-orange-600">
                                {countdown}
                            </span>
                            <span className="text-orange-700">
                                segundo{countdown !== 1 ? 's' : ''}
                            </span>
                        </div>
                        
                        <p className="text-orange-600 text-sm mt-2">
                            Serás redirigido automáticamente al inicio
                        </p>
                    </div>

                    {/* Botón manual */}
                    <button
                        onClick={handleGoHome}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        <Home className="h-5 w-5" />
                        Volver al inicio ahora
                    </button>

                    {/* Mensaje adicional */}
                    <p className="text-gray-600 text-sm mt-8 opacity-80">
                        Si tienes alguna pregunta urgente, no dudes en llamarnos al 
                        <span className="text-blue-600 font-medium"> +569 00000000</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SerasContactado;