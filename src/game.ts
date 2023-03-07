import * as utils from '@dcl/ecs-scene-utils'

//diffuse01
let diffuse01 = new Entity()
let diffuse01Path:string = "models/pittsburg.glb"
    diffuse01.addComponent(new GLTFShape(diffuse01Path))
    diffuse01.addComponent(new Transform({
        position: new Vector3(160, 87, 154),
        scale: new Vector3(58, 58, 58),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(diffuse01)

//collider01
let collider01 = new Entity()
let collider01Path:string = "models/pittsburg_collider.glb"
    collider01.addComponent(new GLTFShape(collider01Path))
    collider01.addComponent(new Transform({
        position: new Vector3(160, 87, 154),
        scale: new Vector3(58, 58, 58),
        rotation: Quaternion.Euler(0, 180, 0)
}))
engine.addEntity(collider01)
