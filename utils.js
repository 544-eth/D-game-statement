export function drawStatusText(context, input, player) {
    context.font = 'bold 22px Verdana'
    context.fillStyle = 'yellow';
    context.fillText('Last input: ' + input.lastKey, 20, 50 )
    context.fillText('Active state: ' + player.currentState.state, 20, 70)
} 