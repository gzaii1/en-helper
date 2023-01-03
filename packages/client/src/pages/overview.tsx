import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(import('../components/dynamic'))

export default function Overview() {
    return <>总览
    <DynamicComponent></DynamicComponent></>
}