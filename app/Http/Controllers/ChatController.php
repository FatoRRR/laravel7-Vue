<?php

namespace App\Http\Controllers;

use App\Chat;
use App\ChatMessage;
use App\ChatParticipant;
use App\Events\NewMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public $user;

    function __construct() {
      $this->user = Auth::user();
    }

    public function index()
    {
        return Chat::whereHas('participant', function($query) {
            $query->where('user_id', $this->user['id']);
        })
        ->with('messages')
        ->get();
    }

    public function create()
    {
        //
    }

    public function storeMessage(Request $request)
    {
        $channel = $request->channel;
        $chatParticipant = ChatParticipant::where([
            ['chat_id', $channel['id']],
            ['user_id', $this->user['id']],
        ])->first();


        $message = ChatMessage::create([
            'message'             => $request->message,
            'chat_participant_id' => $chatParticipant->id
        ]);

        $message = ChatMessage::find($message->id);

        event(new NewMessage($channel, $message));

        return $message;
    }

    public function show(Chat $chat)
    {
        //
    }

    public function edit(Chat $chat)
    {
        //
    }

    public function update(Request $request, Chat $chat)
    {
        //
    }

    public function destroy(Chat $chat)
    {
        //
    }
}
