class Universidad{
    constructor(nombre){
        this._nombre = nombre;
        this.carreras_profesionales = Carreras_profesionales();
        this._ubicacion = Ubicacion();
        this._director = Director();
    }
}

class Carreras_profesionales{
    constructor(nombre, tipo){
        this._nombre = nombre;
        this._tipo = tipo;
    }
}

class Ubicacion{
    constructor(ciudad, pais){
        this._ciudad = ciudad;
        this._pais = pais;
    }
}

class Director{
    constructor(nombre, edad, especializacion){
        this._nombre = nombre;
        this._edad = edad;
        this._especializacion = especializacion;
    }
}