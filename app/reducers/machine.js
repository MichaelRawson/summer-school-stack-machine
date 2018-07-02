const parseNoParameters = (instruction, parameters) => {
  if(parameters.length != 0) {
    throw `error: ${instruction} expected no parameters`
  }
  return null
}

const parseIntParameter = (instruction, parameters) => {
  if(parameters.length != 1 || !/^[\+\-]?[0-9]+$/.test(parameters[0])) {
    throw `error: ${instruction} expected one integer parameter`
  }
  return parseInt(parameters[0])
}


const parseLine = line => {
  var [instruction, ...parameters] = line.trim().split(/\s+/)
  instruction = instruction.toUpperCase()

  switch(instruction) {
    case 'PUSH':
    case 'CYCLE':
    case 'BZERO':
      parameters = parseIntParameter(instruction, parameters)
      break
    case 'HALT':
    case 'POP':
    case 'ADD':
    case 'LESS':
      parameters = parseNoParameters(instruction, parameters)
      break
    default:
      throw `error: unknown instruction ${instruction}`
  }

  return {instruction, parameters}
}

const parse = code => {
  var lines = (code.match(/[^\r\n]+/g) || []).filter(l => /\S/.test(l))
  var instructions = lines.map(parseLine)
  return instructions
}

const push_stack = (stack, item) => {
  return [...stack.slice(), item]
}

const pop_stack = stack => {
  if(stack.length == 0) {
    throw "Stack empty"
  }
  var copy = stack.slice()
  var top = copy.pop()
  return [top, copy]
}

const cycle_stack = (stack, index) => {
  var split = stack.length - index
  if(index <= 0 || index > stack.length) {
    throw "Stack index out of range"
  }

  return [
    ...stack.slice(0, split),
    ...stack.slice(split + 1),
    stack[split]
  ]
}

const run_instruction = (pc, instructions, stack) => {
  if(pc < 0 || pc >= instructions.length) {
    throw "Instruction fetch out of range"
  }
  var {instruction, parameters} = instructions[pc]

  switch(instruction) {
    case 'HALT':
      pc--
      break
    case 'PUSH':
      stack = push_stack(stack, parameters)
      break
    case 'POP':
      stack = pop_stack(stack)[1]
      break
    case 'CYCLE':
      var index = parameters
      stack = cycle_stack(stack, index)
      break
    case 'ADD':
      var [x, stack] = pop_stack(stack)
      var [y, stack] = pop_stack(stack)
      stack = push_stack(stack, y)
      stack = push_stack(stack, x)
      stack = push_stack(stack, x + y)
      break
    case 'LESS':
      var [x, stack] = pop_stack(stack)
      var [y, stack] = pop_stack(stack)
      stack = push_stack(stack, y)
      stack = push_stack(stack, x)
      stack = push_stack(stack, x < y ? 1 : 0)
      break
    case 'BZERO':
      var jump = parameters
      var [x, stack] = pop_stack(stack)
      if(x == 0) {
        pc += (jump - 1)
      }
      stack = push_stack(stack, x)
      break
    default:
      throw "unknown instruction?!"
  }

  pc++
  return [pc, stack]
}

const machine = (state = {
    code: '',
    instructions: [],
    stack: [],
    pc: 0
  }, action) => {
  switch(action.type) {
    case 'FRESH_CODE':
      return {...state, code: action.code}
    case 'COMPILE':
      try {
        return {
          ...state,
          instructions: parse(state.code),
          pc: 0,
          stack: []
        }
      }
      catch(err) {
        alert(err)
        return state
      }
    case 'STEP':
      try {
        var [pc, stack] = run_instruction(
          state.pc,
          state.instructions,
          state.stack
        )
        return {...state, pc, stack}
      }
      catch(err) {
        alert(err)
        return state
      }
    default:
      return state
  }
}

export default machine
