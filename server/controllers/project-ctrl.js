const Project = require('../models/project-model')

const createProject = async (ctx, next) => {
    const newProject = new Project(ctx.request.body)
    const savedProject = await newProject.save()
    ctx.body = savedProject
}

const updateProject = async (ctx, next) => {
    const body = ctx.request.body
    const id = ctx.params.id
    const project = await Project.findById(id)

    project.projectName = body.projectName
    project.projectOwner = body.projectOwner
    project.projectNote = body.projectNote
    
    const updatedProject = await project.save()
    ctx.body = updatedProject
}

const deleteProject = async (ctx, next) => {
    const id = ctx.params.id
    const project = await Project.findById(id)

    const deletedProject = await project.remove()
    ctx.body = deletedProject
}

const getProjectById = async (ctx, next) => {
    const id = ctx.params.id
    const project = await Project.findById(id)

    ctx.body = project
}

const getProjects = async (ctx, next) => {
    const projects = await Project.find({})
    ctx.body = projects
}


module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getProjectById,
    getProjects,
}