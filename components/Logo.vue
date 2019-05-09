<template>
	<div class="VueToNuxtLogo">
		<div class="Triangle Triangle--two"/>
		<div class="Triangle Triangle--one"/>
		<div class="Triangle Triangle--three"/>
		<div class="Triangle Triangle--four"/>
	</div>
</template>

<style>
	.VueToNuxtLogo {
		display: inline-block;
		animation: turn 2s linear forwards 1s;
		transform: rotateX(180deg);
		position: relative;
		overflow: hidden;
		height: 48px;
		width: 64px;
	}

	.Triangle {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
	}

	.Triangle--one {
		border-left: 26px solid transparent;
		border-right: 26px solid transparent;
		border-bottom: 48px solid #41b883;
	}

	.Triangle--two {
		top: 12px;
		left: 12px;
		animation: goright 0.5s linear forwards 3.5s;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-bottom: 40px solid #3b8070;
	}

	.Triangle--three {
		top: 20px;
		left: 12px;
		animation: goright 0.5s linear forwards 3.5s;
		border-left: 13px solid transparent;
		border-right: 13px solid transparent;
		border-bottom: 30px solid #35495e;
	}

	.Triangle--four {
		top: 40px;
		left: 13px;
		animation: godown 0.5s linear forwards 3s;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
		border-bottom: 20px solid #fff;
	}

	@keyframes turn {
		100% {
			transform: rotateX(0deg);
		}
	}

	@keyframes godown {
		100% {
			top: 48px;
		}
	}

	@keyframes goright {
		100% {
			left: 20px;
		}
	}
</style>
