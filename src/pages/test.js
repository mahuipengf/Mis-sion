export function A () {
    console.log('未使用到文件，不回在budle打包文件中出现')
}

export function B () {
    console.log('使用到了文件，会出现在打包文件中')
}